import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/products.interface';
import { generationProducts } from '../../shop/shared/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Array<Product>

  ngOnInit(): void {
    this.products = this.generationProducts.getArr()
  }

}
