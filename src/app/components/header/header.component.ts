import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  api = '1aSI8d2y8xt9JszJbGpqRuTqFEuLWNao'
  uSub!: Subscription
  eSub!: Subscription
  inUSD = 0
  inEUR = 0

  constructor(private curService: CurrencyService){}

  ngOnInit() {
    this.uSub = this.curService.getUSD().subscribe((res)=>{
      this.inUSD = res.result     
    })
    this.eSub = this.curService.getEUR().subscribe((res)=>{
      this.inEUR = res.result     
    })
  }

}
