import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../../../../shared/interface/products.interface';
import { generationProducts } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart$ = new BehaviorSubject<Product[]>([]);
  public cart$: Observable<Product[]> = this._cart$.asObservable();

  public totalPrice$: Observable<number> = this.cart$.pipe(
    map((products: Product[]): number => {
      return products.reduce((acc: number, product: Product): number => acc + product.price, 0);
    })
  )

  constructor(
    private productsService: generationProducts,
  ) {}

  addToCart(product: Product) {
    this._cart$.next([
      ...this._cart$.getValue(),
      product
    ])
  }

  getCart() {
    return this._cart$.getValue()
  }

  deleteItem(product:Product) {
    this._cart$.next([
      ...this._cart$.getValue().filter((el:Product) => el.id !== product.id)
    ])
  }

  isInCart(product: Product): any {
    return this._cart$.getValue().find((el: Product) => el.id === product.id)
  }

}
