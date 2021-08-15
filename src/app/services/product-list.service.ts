import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import datajson from '../../assets/data.json';

export type dataJson = {
  id: number, name: string, price: number, url: string, description: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }


  getProductList():Observable<[]>{
    return this.http.get<[]>('../../assets/data.json');
  }

}
