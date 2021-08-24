import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: {[productId: number]: {productInfo: product, amount: number}} = {};
  totalPrice = 0;
  fullName = '';
  address = '';
  creditCardNumber = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getTotal();
  }

  getTotal(){
    this.totalPrice = 0;
    for(let productId in this.cartList){
      this.totalPrice += this.cartList[productId].amount * this.cartList[productId].productInfo.price;
    }

    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
  }

  updateTotal(event: Event, productId: number){
    this.cartList[productId].amount = parseInt((event.target as HTMLInputElement).value);
    if(Number.isNaN(this.cartList[productId].amount) || this.cartList[productId].amount < 0){
      this.cartList[productId].amount = 0
    }   
    
    this.getTotal();
  }

  purchase(){

  }

  isCartListEmpty(): boolean{
    if(Object.keys(this.cartList).length == 0){
      return true;
    }
    return false;
  }

  
}
