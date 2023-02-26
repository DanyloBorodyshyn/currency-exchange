import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Currency } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  constructor(private http:HttpClient) { }
  
  apikey ='ahuO6ILxPAHwdvcIj0aXkLvEAHyuQmzu'

  headers = new HttpHeaders({
    'apikey': this.apikey
  })

  getUSD(){
    return this.http.get<Currency>('https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=USD&amount=1',{
      headers: this.headers
    }).pipe(
      map((resp)=>{
        console.log(resp)  
        return{
          ...resp
        }
      })
    )
  }

  getEUR(){
    return this.http.get<Currency>('https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=EUR&amount=1',{
      headers: this.headers
    }).pipe(
      map((resp)=>{
        console.log(resp)  
        return{
          ...resp
        }
      })
    )
}
}
