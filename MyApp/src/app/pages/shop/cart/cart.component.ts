import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/interface/products.interface';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products: Array<Product>

  delete(prod: Product) {
    this.cartService.deleteItem(prod)
    this.updateData()
    console.log(prod);
  }

  hi() {
    console.log('hi');
  }

  ngOnInit(): void {
    this.products = this.cartService.getCart()
  }

  updateData() {
    this.products = this.cartService.getCart();
    // this.totalPrice = this.calcPrice();
  }
}
