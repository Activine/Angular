import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/shared/interface/products.interface';
import { generationProducts } from '../../shop/shared/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Observable<Product[]>
  priceSort: boolean = false;
  nameSort: boolean = false;
  IDSort: boolean = false;

  ngOnInit(): void {
    this.products = this.generationProducts.getArr()
  }

  sortPrice() {
    if(this.priceSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.price < b.price ? 1 : -1)
      })
      this.priceSort = false;
      return
    }
    if (!this.priceSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.price > b.price ? 1 : -1)
      })
      this.priceSort = true;
      return
    }
  }

  sortName() {
    if(this.nameSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.name < b.name ? 1 : -1)
      })
      this.nameSort = false;
      return
    }
    if (!this.nameSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.name > b.name ? 1 : -1)
      })
      this.nameSort = true;
      return
    }
  }

  sortID() {
    if(this.IDSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.id < b.id ? 1 : -1)
      })
      this.IDSort = false;
      return
    }
    if (!this.IDSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.id > b.id ? 1 : -1)
      })
      this.IDSort = true;
      return
    }
  }
}
