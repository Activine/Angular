import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/products.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  @Input() product: Product

  ngOnInit(): void {
  }

}
