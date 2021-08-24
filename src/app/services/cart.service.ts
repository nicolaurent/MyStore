import { Injectable } from '@angular/core';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { [productId: number] : {productInfo: product, amount: number}} = {}

  constructor() { }

  addCart(productId: number, product: product, quantity: number){
    if(productId in this.cart){
      this.cart[productId].amount += quantity
    }
    else{
      this.cart[productId] = {productInfo: product, amount: quantity}
    }
  }

  getCart(){
    return this.cart;
  }
}
