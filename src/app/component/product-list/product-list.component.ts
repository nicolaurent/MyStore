import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { product } from 'src/app/model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: product[] = []
  
  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.productListService.productList.subscribe(res => {
      this.productList = res
    });

    
  }

  

}
