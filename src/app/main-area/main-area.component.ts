import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CurrencyService } from "../services/currency.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { currencyListSelector, selectcurrencyState, lastUpdatedSelector } from "../store/currency.selectors";
import * as CurrencyActions from '../store/currency.actions'
import * as WatchlistActions from '../store/watchlist/watchlist.actions'
import { watchlistSelect } from "../store/watchlist/watchlist.selectors";

@Component({
    selector: 'app-main',
    styleUrls: ['./main-area.component.css'],
    templateUrl: './main-area.component.html',
    imports: [CommonModule]
})
export class MainArea {
    filteredCoins$: Observable<any>;
    watchlistCoins$: Observable<any>;
    watchlistCoins: any[] = []
    lastUpdated$: Observable<string | null>;
    
    constructor(private store: Store ) {
        this.filteredCoins$ = this.store.select(currencyListSelector)
        this.watchlistCoins$ = this.store.select(watchlistSelect)
        this.lastUpdated$ = this.store.select(lastUpdatedSelector)

        this.watchlistCoins$.subscribe(res => {
            this.watchlistCoins = res
        })
    }

    ngOnInit() {
        this.store.dispatch(CurrencyActions.loadCurrencyList())
    }

    addToWatchlist(coin: any) {
        if (this.isInWatchlist(coin)) {
            this.store.dispatch(WatchlistActions.removeFromWatchlist({coin}));
        } else {
            this.store.dispatch(WatchlistActions.addToWatchList({coin}));
        }
    }

    isInWatchlist(coin: any): boolean {
        const index = this.watchlistCoins.findIndex(watchlistCoin => watchlistCoin.id === coin.id)
        return index !== -1;
    }
}