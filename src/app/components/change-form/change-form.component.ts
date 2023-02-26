import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.scss']
})
export class ChangeFormComponent implements OnInit {

  constructor(private curService: CurrencyService) { }

  cur1 = 'UAH'
  cur2 = 'USD'
  numInp1: number = 1
  numInp2!: number
  usd!: number
  eur!: number

  ngOnInit() {
    this.curService.getUSD().subscribe(res=>{
      this.usd = res.info.rate
    })
    this.curService.getEUR().subscribe(res=>{
      this.eur = res.info.rate
    })
  }

  convertValue(){
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

  convertValue1(){
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

}
