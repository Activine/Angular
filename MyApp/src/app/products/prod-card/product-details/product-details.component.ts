import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    private serverServive: generationProducts) { }
  themeProduct: any
  ngOnInit(): void {
    let idProduct: any;
    this.activatedRoute.params.forEach(param => {
      idProduct = param['id'];
    } )
    this.themeProduct = this.serverServive.getProductTheme(idProduct)
    console.log(idProduct);
  }
}
