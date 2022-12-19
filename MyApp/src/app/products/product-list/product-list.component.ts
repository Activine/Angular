import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/products.interface';
import { generationProducts } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Array<Product>

  ngOnInit(): void {
    this.products = this.generationProducts.getArr()
  }
}
