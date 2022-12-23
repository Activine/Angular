import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from 'src/app/shared/interface/products.interface';

@Component({
  selector: 'app-cart-tooltip',
  templateUrl: './cart-tooltip.component.html',
  styleUrls: ['./cart-tooltip.component.scss']
})
export class CartTooltipComponent implements OnInit  {

  constructor(private cartService: CartService) { }

  ngOnInit (): void {
    this.updateData()
    this.calculatePrice()
  }

  @Output() deleteClick = new EventEmitter();
  products: Array<Product>;
  price: number = 0;

  delete(prod: Product) {
    this.cartService.deleteItem(prod)
    this.updateData()
    this.calculatePrice()
    console.log(prod);
  }

  calculatePrice() {
    return this.price = this.products.reduce((acc: number, item: Product) => acc += item.price, 0)
  }

  updateData() {
    this.products = this.cartService.getCart();
  }
}
