import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Currency } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  constructor(private http:HttpClient) { }
  
  private apikey ='BQNCg0Amod6F4ycciD1YTXY8EsR4uf3t'

  headers = new HttpHeaders({
    'apikey': this.apikey
  })

  getCurrency(value: string){
    return this.http.get<Currency>(`https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=${value}&amount=1`,{
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
