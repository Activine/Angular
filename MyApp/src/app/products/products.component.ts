import { Component, OnInit } from '@angular/core';
import { Product } from './interface/products.interface';
import { generationProducts } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [generationProducts]
})
export class ProductsComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Array<Product> = []

  ngOnInit(): void {
    this.products = this.generationProducts.getRandomData()
  }
}
