import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { product } from 'src/app/model/product';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList: product[] = []

  constructor(private cartService: CartService, private productListService: ProductListService) { }

  ngOnInit(): void {
    this.productListService.getProductList().subscribe(res => {
      this.productList = res
    });
  }

}
