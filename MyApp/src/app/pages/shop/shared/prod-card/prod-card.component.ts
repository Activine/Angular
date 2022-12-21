import { Component, OnInit, Input } from '@angular/core';
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
  @Input() product: Product;

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
  }
}
