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

  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.calculatePrice()
  }

  updateData() {
    this.products = this.cartService.getCart();
  }
}
