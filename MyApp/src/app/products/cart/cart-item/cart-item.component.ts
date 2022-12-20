import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interface/products.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteClick = new EventEmitter();

  constructor(
  ) { }


  ngOnInit(): void {
  }

}
