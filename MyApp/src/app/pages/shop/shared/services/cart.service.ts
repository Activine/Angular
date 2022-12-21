import { Injectable } from '@angular/core';
import { Product } from '../../../../shared/interface/products.interface';
import { generationProducts } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartArr: Array<Product> = []

  constructor(
    private productsService: generationProducts,
  ) {}

  addToCart(product: Product) {
    this.cartArr.push(product)
    console.log(this.cartArr);
  }

  getCart() {
    return this.cartArr
  }

  deleteItem(prod:Product) {
    this.cartArr = this.cartArr.filter((el:Product) => el.id !== prod.id)
  }
}
