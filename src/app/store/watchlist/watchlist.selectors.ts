import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WatchlistState } from "./watchlist.reducer";

export const WatchListState = createFeatureSelector<WatchlistState>('watchlist')

export const watchlistSelect = createSelector(
    WatchListState,
    (state) => state.watchlistCoins
)