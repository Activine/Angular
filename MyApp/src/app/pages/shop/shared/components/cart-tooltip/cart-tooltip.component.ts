import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/shared/interface/products.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-tooltip',
  templateUrl: './cart-tooltip.component.html',
  styleUrls: ['./cart-tooltip.component.scss']
})
export class CartTooltipComponent implements OnInit  {

  @Output() deleteClick = new EventEmitter();
  products$: Observable<Product[]> = this.cartService.cart$;
  price: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit (): void {
    // this.updateData()

    this.calculatePrice()
  }

  delete(prod: Product) {
    this.cartService.deleteItem(prod)
    // this.updateData()
    console.log(prod);
  }

  calculatePrice() {
    return this.cartService.totalPrice$.subscribe((data) => this.price = data)
  }

  // updateData() {
  //   this.products = this.cartService.getCart();
  // }
}
