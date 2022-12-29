import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../../../../../shared/interface/products.interface';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.cartService.cart$.subscribe((res: Product[]) => {
      console.log('markerDescription', {res});
      this.ngOnInit();
    })
  }

  description: string = 'Add to cart'
  @Input() product: Product;
  @Input() toggle: Boolean = true;

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  deleteFromCart() {
    this.cartService.deleteItem(this.product)
  }

  cartHandle() {
    if (!this.cartService.isInCart(this.product)) {
      this.addToCart()
      console.log(this.cartService.isInCart(this.product));
      return
    }
    if (this.cartService.isInCart(this.product)) {
      this.deleteFromCart()
      return
    }
  }

  goToDetails() {
    this.router.navigate(['/products/'+ this.product.id], { relativeTo: this.activatedRoute });
  }

  markerDescription() {
    console.log(this.cartService.getCart());
    if(!this.product) {
      return
    }
    return  this.description = this.cartService.isInCart(this.product) ? 'In cart' : 'Add to cart'
    // if (this.cartService.getCart().some((el) => el.id === this.product.id)) {
    //   this.description = 'In cart';
    //   // console.log(this.product, this.description);
    //   return;
    // }

    // if (!this.cartService.getCart().some((el) => el.id === this.product.id)) {
    //   this.description ='Add to cart';
    //   // console.log(this.product, this.description);
    //   return;
    // }
  }

  ngOnInit() {
    this.markerDescription()
  }
}
