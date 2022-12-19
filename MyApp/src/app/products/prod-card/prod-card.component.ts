import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/products.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  @Input() product: Product;

  ngOnInit(): void {
    // console.log(this.product);
  }

  // showDetailsTheme(product: any) {
  //   this.router.navigate(['products', product.id])
  // }
}
