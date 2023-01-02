import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interface/products.interface';
import { generationProducts } from '../shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Observable<Product[]>

  ngOnInit(): void {
    this.products = this.generationProducts.getArr()
  }
}
