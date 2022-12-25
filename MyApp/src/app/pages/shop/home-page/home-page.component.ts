import { Component, OnInit } from '@angular/core';
import { generationProducts } from '../shared/services/products.service';
import { Product } from 'src/app/shared/interface/products.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Array<Product>
  topProducts: Array<Product>

  topThree() {
    this.topProducts = [...this.products];
    this.topProducts.sort((a: Product, b: Product) => a.price < b.price ? 1 : -1).splice(3)
  }

  ngOnInit(): void {
    this.products = this.generationProducts.getArr()
    this.topThree()
  }
}
