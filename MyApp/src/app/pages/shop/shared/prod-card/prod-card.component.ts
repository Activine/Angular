import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../../../../shared/interface/products.interface';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {

  constructor(
    private cartService: CartService,

  ) { }
  description: string = 'Add to cart'
  @Input() product: Product;
  @Input() toggle: Boolean = true;

  addToCart() {
    this.cartService.addToCart(this.product)
    this.toggle = !this.toggle
  }

  deleteFromCart() {
    this.cartService.deleteItem(this.product)
    this.toggle = !this.toggle
  }

  cartHandle(value: string) {
    if (value === "Add to cart") {
      this.addToCart()
      this.description = "In cart";
      return
    }
    if (value === "In cart") {
      this.deleteFromCart()
      this.description = "Add to cart";
      return
    }
  }

  markerDescription() {
    if(this.cartService.indexItem(this.product) === -1) {
      this.description = 'Add to cart'
      return
    }
    if (this.cartService.indexItem(this.product) !== -1) {
      this.description = "In cart"
      return
    }
  }

  ngOnInit(): void {
    this.markerDescription()
  }
}
