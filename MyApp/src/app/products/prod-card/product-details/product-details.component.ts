import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { generationProducts } from '../../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serverServive: generationProducts
  ) { }

  themeProduct: any

  addToCart() {
    console.log('hi');
  }

  ngOnInit(): void {
    let idProduct: any;

    this.activatedRoute.params.forEach(param => {
      idProduct = param['id'];
    })

    this.themeProduct = this.serverServive.getProductTheme(idProduct)
  }

  goBack() {
    this.router.navigate(['/products'], { relativeTo: this.activatedRoute });
  }
}
