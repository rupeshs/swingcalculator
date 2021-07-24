import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//ng build --output-path docs --base-href /
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
  title = 'swingcalculator';
  stockPrice: string = '';
  investedMoney: string = '';
  stockPriceExpected: string = '';
  currentStockPrice: number = 0;
  nShares: number = 0;
  profit: number = 0;
  change: number = 0;

  getNumberOfShares(): string {
    //console.log(this.stockPrice);
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
      //console.log(this.currentStockPrice);
      return this.currentStockPrice.toFixed(2);
    }
    return this.stockPriceExpected;
  }

  calculateProfit(): string {
    if (Number.isNaN(parseFloat(this.stockPriceExpected))) return '';

    if (this.nShares && parseFloat(this.stockPriceExpected) > 0) {
      this.profit = this.currentStockPrice - parseFloat(this.investedMoney);
      return this.profit.toFixed(2);
    }
    return '';
  }

  getStockChanged(): string {
    if (this.nShares) {
      this.change =
        parseFloat(this.stockPriceExpected) - parseFloat(this.stockPrice);
      return this.change.toFixed(2);
    }
    return '';
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
