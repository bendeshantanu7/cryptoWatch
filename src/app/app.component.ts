import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar.component';
import { MainArea } from './main-area/main-area.component';
import { Search } from './search/search.component';
import { RefreshTimer } from './refresh-timer/refresh-timer.component';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  imports: [Sidebar, MainArea, Search, RefreshTimer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CurrencyService]
})
export class AppComponent {
  title = 'cryptoWatch';

  constructor(private currency: CurrencyService) {}

  ngOnInit() {
    
  }
}
