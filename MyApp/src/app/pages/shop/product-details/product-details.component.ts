import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interface/products.interface';
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
    ) {
      this.cartService.cart$.subscribe((res: Product[]) => {
        console.log('details', {res});
        this.ngOnInit();
      })
    }

  themeProduct: Product;
  description: string = 'Add to cart'

  // addToCart() {
  //   if (!this.cartService.isInCart(this.themeProduct)) {
  //     this.cartService.addToCart(this.themeProduct)
  //     this.description = 'In cart'
  //   }
  //   console.log(this.themeProduct);
  // }

  addToCart() {
    this.cartService.addToCart(this.themeProduct)
  }

  deleteFromCart() {
    this.cartService.deleteItem(this.themeProduct)
  }

  cartHandle() {
    if (!this.cartService.isInCart(this.themeProduct)) {
      this.addToCart()
      console.log(this.cartService.isInCart(this.themeProduct));
      return
    }
    if (this.cartService.isInCart(this.themeProduct)) {
      this.deleteFromCart()
      return
    }
  }

  ngOnInit(): void {
    let idProduct: any;

    this.activatedRoute.params.forEach(param => {
      idProduct = param['id'];
    })

    this.themeProduct = this.serverServive.getProductTheme(idProduct) as Product
    console.log('adsadad', this.themeProduct);

    this.markerDescription()
  }

  goBack() {
    this.router.navigate(['/products'], { relativeTo: this.activatedRoute });
  }

  markerDescription() {
    console.log(this.cartService.getCart());
    if(!this.themeProduct) {
      return
    }
    return this.description = this.cartService.isInCart(this.themeProduct) ? 'In cart' : 'Add to cart'
  }

}
