import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { currencyreducer } from './store/currency.reducer';
import { CurrencyEffects } from './store/currency.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { WatchlistReducer } from './store/watchlist/watchlist.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideStore({ currency: currencyreducer, watchlist: WatchlistReducer }), provideEffects(CurrencyEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideStoreDevtools()]
};
