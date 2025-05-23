import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CryptoState } from "./currency.reducer";

export const selectcurrencyState = createFeatureSelector<CryptoState>('currency')

export const currencyListSelector = createSelector(
    selectcurrencyState,
    (state) => {
        console.log(state)
        return state.coins
    }
)

export const lastUpdatedSelector = createSelector(
    selectcurrencyState,
    (state) => state.lastUpdated
)