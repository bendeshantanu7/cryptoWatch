import { createAction, props } from "@ngrx/store";

export const loadCurrencyList = createAction("[Main Area] get currency list")

export const currencyListSuccess = createAction("[Main Area] Currency load success", props<{coins: any[]}>());

export const currencyListFailure = createAction("[Main Area] currency list failure", props<{error: any}>());

export const loadSearchList = createAction("[Search] load search list", props<{query: string}>())

export const searchListSuccess = createAction("[Search] search list success", props<{coins: any[]}>());

export const searchListFailure = createAction("[Seacrch] search list failure", props<{error: string}>())