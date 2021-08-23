import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import datajson from '../../assets/data.json';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  productList: Observable<[]>;
  
    constructor(private http: HttpClient) { 
      this.productList = this.http.get<[]>('../../assets/data.json');
  }


  getProductList():Observable<[]>{
    return this.productList;
  }


}
