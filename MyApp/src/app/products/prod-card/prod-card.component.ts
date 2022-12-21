import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/products.interface';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {

  constructor() { }

  @Input() product: Product;

  ngOnInit(): void {
  }
}
