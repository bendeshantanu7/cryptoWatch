import { createAction, props } from "@ngrx/store";

export const addToWatchList = createAction("[Sidebar] Page add to watchlist", props<{coin: any}>());

export const removeFromWatchlist = createAction("[Sidebar] Page remove from watchlist", props<{coin: any}>())