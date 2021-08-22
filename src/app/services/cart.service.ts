import { Injectable } from '@angular/core';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: { [productId: number] : number} = {}

  constructor() { }

  addCart(productId: number, quantity: number){
    if(productId in this.cart){
      this.cart[productId] += quantity
    }
    else{
      this.cart[productId] = quantity
    }
  }

  getCart(){
    return this.cart;
  }
}
