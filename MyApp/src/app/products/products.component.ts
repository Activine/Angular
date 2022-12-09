import { Component, OnInit, Injectable } from '@angular/core';
import { generationProducts } from './products.service';
import { Product }  from './interface/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [generationProducts]
})
@Injectable()
export class ProductsComponent implements OnInit {
  constructor(private generationProducts: generationProducts) { };

  products:Array<Product> = []

  ngOnInit(): void {
    this.products = this.generationProducts.getRandomData()
  }
}
