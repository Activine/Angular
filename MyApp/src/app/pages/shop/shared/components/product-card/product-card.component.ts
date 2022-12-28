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
  ) { }
  description: string = 'Add to cart'
  @Input() product: Product;
  @Input() toggle: Boolean = true;

  addToCart() {
    this.cartService.addToCart(this.product)
    this.markerDescription()
    this.cartService.cartArr$.subscribe(() => this.markerDescription())
  }

  deleteFromCart() {
    this.cartService.deleteItem(this.product)
    this.cartService.cartArr$.subscribe(() => this.markerDescription())
    this.markerDescription()
  }

  cartHandle() {
    if (!this.cartService.isInCart(this.product)) {
      this.addToCart()
      // this.description = "In cart";
      console.log('In cart');
      return
    }
    if (this.cartService.isInCart(this.product)) {
      this.deleteFromCart()
      // this.description = "Add to cart";
      console.log('Add to cart');
      return
    }
  }

  goToDetails() {
    this.router.navigate(['/products/'+ this.product.id], { relativeTo: this.activatedRoute });
  }

  markerDescription() {
    if (this.cartService.getCart().some((el) => el.id === this.product.id)) {
      console.log('1');
      this.description = 'In cart';
      return;
    }

    if (!this.cartService.getCart().some((el) => el.id === this.product.id)) {
      console.log('2');
      this.description ='Add to cart';
      return;
    }
    // if(this.cartService.indexItem(this.product) === -1) {
    //   this.description = 'Add to cart'
    //   return
    // }
    // if (this.cartService.indexItem(this.product) !== -1) {
    //   this.description = "In cart"
    //   return
    // }
  }

  ngOnInit(): void {
    // this.markerDescription()
  }
}
