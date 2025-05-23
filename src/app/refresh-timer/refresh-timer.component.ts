import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { lastUpdatedSelector } from "../store/currency.selectors";

@Component({
    selector: 'app-refresh-timer',
    styleUrls: ['./refresh-timer.component.html'],
    templateUrl: './refresh-timer.component.html',
    imports: [CommonModule]
})
export class RefreshTimer {
    lastUpdated$: Observable<string | null>;
    constructor (private store: Store) {
        this.lastUpdated$ = this.store.select(lastUpdatedSelector)
    }
}