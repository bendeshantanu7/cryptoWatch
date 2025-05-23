import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CurrencyActions from './currency.actions'
import { CurrencyService } from "../services/currency.service";
import { catchError, distinctUntilChanged, EMPTY, map, of, switchMap } from "rxjs";

@Injectable()
export class CurrencyEffects {
    getCurrency$;
    getSearch$;

    temp = [
        {
            resourceName: 'Test 1',
            contentLength: '250',
            hasChildren: true,
            resources: [
                {
                    resourceName: 'Test 1',
            contentLength: '250',
            hasChildren: false,
                }
            ]
        }
    ]

    constructor (private action$: Actions, private currencyService: CurrencyService) {
        this.getCurrency$ = createEffect(() => {
            return this.action$.pipe(
                ofType(CurrencyActions.loadCurrencyList),
                switchMap(() => this.currencyService.getCurrency()),
                    map((coins: any) => CurrencyActions.currencyListSuccess({coins})),
                    catchError(error => of(CurrencyActions.currencyListFailure({error})))
                )
            
        });

        this.getSearch$ = createEffect(() => {
            return this.action$.pipe(
                ofType(CurrencyActions.loadSearchList),
                distinctUntilChanged(),
                switchMap(({query}) => {
                    if (!query) {
                        console.warn('Empty query, skipping API');
                        return EMPTY;
                      }
                    return this.currencyService.searchCurrency(query)}),
                        map((res: any) => {
                            console.log('coins', res)
                            return CurrencyActions.searchListSuccess({coins: res.coins})
                        }),
                        catchError((error) => of(CurrencyActions.searchListFailure(error)))
                    
                
            )
        })
    }
}