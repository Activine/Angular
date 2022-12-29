import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interface/products.interface';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private cartService: CartService) { }

  products$: Observable<Product[]> = this.cartService.cart$;
  price$: Observable<number> = this.cartService.totalPrice$;

  delete(prod: Product) {
    this.cartService.deleteItem(prod)
  }

}
