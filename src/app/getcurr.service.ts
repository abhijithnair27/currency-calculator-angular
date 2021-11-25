import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcurrService {

  constructor(private http:HttpClient) { }
  
  currencyData:any;

  getCurrencyData() : Observable<any>{
    return this.http.get('https://open.er-api.com/v6/latest/USD');
  }

}
