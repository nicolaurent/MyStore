import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
    constructor(private http: HttpClient) { 
    }

  getProductList():Observable<[]>{
    return this.http.get<[]>('../../assets/data.json');
  }
}
