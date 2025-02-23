import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { LocaleType, PageType } from '../types';
import { LOCALE } from '../utils/constant';
import { storage } from '../utils/storage/storage.utils';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly lang: LocaleType = storage.getItem('lang') || LOCALE.EN;
  private readonly apiService = inject(ApiService);
  private readonly translateService = inject(TranslateService);
  private readonly destroy$ = new Subject<void>();

  readonly pageData = signal<PageType | null>(null);
  readonly menus = signal<string[]>([]);

  /**
   * Initialize store
   */
  init() {
    return new Promise<void>((resolve) => {
      this._fetchTranslation(this.lang);

      this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(({ lang }) => {
        storage.setItem('lang', lang as LocaleType);
        this._fetchTranslation(lang as LocaleType);
      });

      this.translateService.setTranslation(LOCALE.EN, {
        CALENDAR: {
          FREE: 'Free',
          BUSY: 'Busy',
        },
      });

      this.translateService.setTranslation(LOCALE.FR, {
        CALENDAR: {
          FREE: 'Libre',
          BUSY: 'Occupé',
        },
      });

      resolve();
    });
  }

  /**
   * Fetch translation
   * @param lang
   * @private
   */
  private _fetchTranslation(lang: LocaleType) {
    this.apiService
      .getPages(lang)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: PageType) => this._updateTranslation(data));
  }

  /**
   * Update translation
   * @param data
   * @private
   */
  private _updateTranslation(data: PageType) {
    this.pageData.set(data);
    this.menus.set(data.head_menu);
  }
}
