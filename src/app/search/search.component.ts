import { Component, DestroyRef, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, filter, of, switchMap } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../store/currency.actions'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class Search {
  searchControl = new FormControl('', {nonNullable: true});
  private destroyRef = inject(DestroyRef)
  constructor(private store: Store ) {}


  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((query): query is string => !!query && query.length >= 2),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((query) => {
        console.log('[Dispatching searchCoins]', query);
        this.searchControl.setValue(query, { emitEvent: false });
        if(query === '' || query === undefined) {
          this.store.dispatch(CurrencyActions.loadCurrencyList())
        }
        this.store.dispatch(CurrencyActions.loadSearchList({ query }));
    });
  }
}
