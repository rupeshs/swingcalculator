import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'swingcalculator';
  stockPrice: string = '';
  investedMoney: string = '';
  stockPriceExpected: string = '';
  currentStockPrice: number = 0;
  nShares: number = 0;
  profit: number = 0;
  change: number = 0;

  getNumberOfShares(): string {
    console.log(this.stockPrice);
    if (parseFloat(this.stockPrice) && this.investedMoney) {
      this.nShares =
        parseFloat(this.investedMoney) / parseFloat(this.stockPrice);
      return this.nShares.toFixed(1);
    }
    return '0';
  }

  getExpectedValue(): string {
    if (this.nShares) {
      this.currentStockPrice =
        this.nShares * parseFloat(this.stockPriceExpected);
      console.log(this.currentStockPrice);
      return this.currentStockPrice.toFixed(2);
    }
    return this.stockPriceExpected;
  }

  calculateProfit(): string {
    if (this.nShares) {
      this.profit = this.currentStockPrice - parseFloat(this.investedMoney);
      return this.profit.toFixed(2);
    }
    return this.profit.toString();
  }

  getStockChanged(): string {
    if (this.nShares) {
      this.change =
        parseFloat(this.stockPriceExpected) - parseFloat(this.stockPrice);
      return this.change.toFixed(2);
    }
    return '';
  }
}
