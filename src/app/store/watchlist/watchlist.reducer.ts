import { createReducer, on } from "@ngrx/store";
import * as WatchlistActions from './watchlist.actions'

export interface WatchlistState {
    watchlistCoins: any[]
}

const initialState: WatchlistState = {
    watchlistCoins: []
}
export const WatchlistReducer = createReducer(
    initialState,
    on(WatchlistActions.addToWatchList,(state, {coin}) => {
        return {
            ...state,
            watchlistCoins: [...state.watchlistCoins, coin]
        }
    }),
    on(WatchlistActions.removeFromWatchlist, (state, {coin}) => {
        const index = state.watchlistCoins.findIndex(watchlistcoin => watchlistcoin.id === coin.id)
        console.log('index', index)
        return {
            ...state,
            watchlistCoins: state.watchlistCoins.filter(watchlistCoin => watchlistCoin.id !== coin.id)
        }
    })
)