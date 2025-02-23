import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleType } from '../../types';
import { LOCALE } from '../../utils/constant';
import { storage } from '../../utils/storage/storage.utils';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  readonly selectedLang = signal<LocaleType>(storage.getItem('lang') || LOCALE.EN);
  languages = [LOCALE.EN, LOCALE.FR];
  isOpen = false;

  private readonly translateService = inject(TranslateService);

  setLanguage(lang: LocaleType) {
    this.selectedLang.set(lang);
    this.translateService.use(lang);
    this.isOpen = false;
  }
}
