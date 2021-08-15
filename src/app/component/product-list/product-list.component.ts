import { Component, OnInit } from '@angular/core';
import { ProductListService, dataJson } from 'src/app/services/product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: dataJson[] = []

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.productListService.getProductList().subscribe(res => {
      this.productList = res
    });

    
  }

}
