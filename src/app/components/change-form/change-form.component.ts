import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.scss']
})
export class ChangeFormComponent implements OnInit, OnDestroy {

  constructor(private currencyService: CurrencyService) { }

  public cur1 = 'UAH'
  public cur2 = 'USD'
  public numInp1!: number
  public numInp2!: number
  public options = [{value: 'UAH'},{value: 'USD'},{value: 'EUR'}]
  private usd!: number
  private eur!: number
  private uSub!: Subscription
  private eSub!: Subscription

  ngOnInit() {
    this.uSub = this.currencyService.getCurrency('USD').subscribe(res=>{
      this.usd = res.info.rate
    })
    this.eSub = this.currencyService.getCurrency('EUR').subscribe(res=>{
      this.eur = res.info.rate
    })
  }

  public convertValue(){
    if(this.cur1==='UAH'&&this.cur2==='EUR'){
      this.numInp2 = this.numInp1 / this.eur
    }
    else if(this.cur1==='UAH'&&this.cur2==='USD'){
      this.numInp2 = this.numInp1 / this.usd
    }
    else if(this.cur1==='EUR'&&this.cur2==='UAH'){
      this.numInp2 = this.numInp1*this.eur
    }
    else if(this.cur1==='USD'&&this.cur2==='UAH'){
      this.numInp2 = this.numInp1*this.usd
    }
    else if(this.cur1==='USD'&&this.cur2==='EUR'){
      this.numInp2 = (this.numInp1*this.usd) / this.eur
    }
    else if(this.cur1==='EUR'&&this.cur2==='USD'){
      this.numInp2 = (this.numInp1*this.eur) / this.usd
    }
    else this.numInp2 = this.numInp1
  }

  public inputValue(){
    if(this.cur1==='UAH'&&this.cur2==='EUR'){
      this.numInp1 = this.numInp2 * this.eur
    }
    else if(this.cur1==='UAH'&&this.cur2==='USD'){
      this.numInp1 = this.numInp2 * this.usd
    }
    else if(this.cur1==='EUR'&&this.cur2==='UAH'){
      this.numInp1 = this.numInp2 / this.eur
    }
    else if(this.cur1==='EUR'&&this.cur2==='USD'){
      this.numInp1 = (this.numInp2*this.usd)/this.eur
    }
    else if(this.cur1==='USD'&&this.cur2==='UAH'){
      this.numInp1 = this.numInp2 / this.usd
    }
    else if(this.cur1==='USD'&&this.cur2==='EUR'){
      this.numInp1 = (this.numInp2*this.usd) / this.eur
    }
    else this.numInp1 = this.numInp2
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
