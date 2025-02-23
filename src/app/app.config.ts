import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

import { appRoutes } from './app.routes';
import { StoreService } from './services';
import { LOCALE } from './utils/constant';
import { storage } from './utils/storage/storage.utils';

function initializeApp(storeService: StoreService): () => Promise<void> {
  return () => storeService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(appRoutes),
    provideHttpClient(),

    provideTranslateService({
      defaultLanguage: storage.getItem('lang') || LOCALE.EN,
    }),

    provideAppInitializer(() => {
      const initializerFn = initializeApp(inject(StoreService));
      return initializerFn();
    }),

    StoreService,
  ],
};
