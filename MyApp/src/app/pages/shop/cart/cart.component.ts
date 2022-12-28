import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/interface/products.interface';
import { CartService } from '../shared/services/cart.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private cartService: CartService) { }

  products$: Observable<Array<Product>> = this.cartService.cart$;
  price$: Observable<number> = this.cartService.totalPrice$;

  delete(prod: Product) {
    this.cartService.deleteItem(prod)
  }

  // calculatePrice() {
  //   return this.cartService.totalPrice$.subscribe((data) => (this.price = data));
  // }

  // ngOnInit(): void {
  //   this.calculatePrice()
  // }
}
