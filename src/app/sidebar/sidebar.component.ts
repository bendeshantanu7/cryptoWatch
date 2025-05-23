import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as WatchlistSelector from '../store/watchlist/watchlist.selectors'
import * as WatchlistActions from '../store/watchlist/watchlist.actions'

@Component({
    selector: 'app-sidebar',
    styleUrls: ['./sidebar.component.css'],
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class Sidebar {
    watchList$: any    
    constructor(private store: Store) {
        this.watchList$ = this.store.select(WatchlistSelector.watchlistSelect)
    }

    removeFromWatchlist(coin: any) {
        console.log(coin)
        this.store.dispatch(WatchlistActions.removeFromWatchlist({coin}))
    }
}