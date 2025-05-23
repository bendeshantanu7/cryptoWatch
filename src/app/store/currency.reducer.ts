import { createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';

export interface CryptoState {
    coins: Array<any>,
    loading: boolean,
    error: string | null,
    lastUpdated: string | null
}

export const initialState: CryptoState = {
  coins: [],
  loading: false,
  error: null,
  lastUpdated: null
};
export const currencyreducer = createReducer(
  initialState,
  on(CurrencyActions.loadCurrencyList, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(CurrencyActions.currencyListSuccess, (state, {coins}) => {
    console.log(coins)
    return {
        ...state,
        coins: coins,
        loading: false,
        error: null,
        lastUpdated: new Date().toLocaleString()
      }
  }),
  on(CurrencyActions.currencyListFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(CurrencyActions.loadSearchList,(state) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}),
on(CurrencyActions.searchListSuccess,(state, {coins}) => {
    return {
        ...state,
        coins,
        error: null,
        loading: false,
        lastUpdated: new Date().toLocaleString()
    }
}),
on(CurrencyActions.searchListFailure,(state, {error}) => {
    return {
        ...state,
        error,
        loading: false
    }
})
);
