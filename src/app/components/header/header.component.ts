import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  private uSub!: Subscription
  private eSub!: Subscription
  public inUSD = 0
  public inEUR = 0

  constructor(private currencyService: CurrencyService){}

  ngOnInit() {
    this.uSub = this.currencyService.getCurrency('USD').subscribe((res)=>{
      this.inUSD = res.result     
    })
    this.eSub = this.currencyService.getCurrency('EUR').subscribe((res)=>{
      this.inEUR = res.result     
    })
  }

  ngOnDestroy() {
    if(this.uSub){
      this.uSub.unsubscribe()
    }
    if(this.eSub){
      this.eSub.unsubscribe()
    }
  }

}
