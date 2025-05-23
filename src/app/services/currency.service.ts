import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class CurrencyService {
    constructor(private http: HttpClient) {}

    getCurrency() {
        return this.http.get('https://api.coingecko.com/api/v3/coins/markets',
            {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: '50',
                    page: '1',
                    sparkline: 'false',
                    price_change_percentage: '24h'
                }
            }
        )
    }

    searchCurrency(query: string) {
        return this.http.get(`https://api.coingecko.com/api/v3/search`, {
            params: { query }
        })
    }
}