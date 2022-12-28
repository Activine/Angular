import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Product } from '../../../../shared/interface/products.interface';
import { generationProducts } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartArr: Array<Product> = []
  totalPrice$ = new BehaviorSubject<number>(0);
  cartArr$ = new Subject<Product[]>();

  constructor(
    private productsService: generationProducts,
  ) {}

  addToCart(product: Product) {
    this.cartArr.push(product)
    console.log(this.cartArr);
    // this.culculateTotalPrice()
  }

  getCart() {
    this.culculateTotalPrice()
    // console.log(this.cartArr$);
    console.log(this.totalPrice$);
    return this.cartArr
  }

  deleteItem(product:Product) {
    this.cartArr = this.cartArr.filter((el:Product) => el.id !== product.id)
    // this.culculateTotalPrice()
    console.log(this.cartArr);
  }

  indexItem(product: Product) {
    return this.cartArr.indexOf(product)
  }

  isInCart(product: Product): Product | undefined {
    return this.cartArr.find((el: Product) => el.id === product.id)
  }

  culculateTotalPrice() {
    this.totalPrice$.next(
      this.cartArr.reduce((acc: number, value: Product) => (acc += value.price),0));
  }
}
