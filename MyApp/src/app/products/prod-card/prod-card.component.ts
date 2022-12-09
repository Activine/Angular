import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/products.interface';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {

  constructor() { }

  @Input() prod: Product = {
    id: '',
    name: '',
    price: 0
  };

  ngOnInit(): void {
  }
}
