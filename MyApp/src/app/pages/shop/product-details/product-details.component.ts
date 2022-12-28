import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/services/cart.service';
import { generationProducts } from '../shared/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serverServive: generationProducts,
    private cartService: CartService
    ) { }

  themeProduct: any

  addToCart() {
    // let idProduct: any;
    // this.activatedRoute.params.forEach(param => {
    //   idProduct = param['id'];
    // })
    // console.log(this.themeProduct = this.serverServive.getProductTheme(idProduct));
    console.log(this.themeProduct);

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
