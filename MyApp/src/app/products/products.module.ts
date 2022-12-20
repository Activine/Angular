import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRouteRoutingModule } from './products-route-routing.module';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header.component';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { UaCurrencyPipe } from './pipes/ua-currency.pipes';
import { ColorDirective } from './directive/color.directive';
import { ProductDetailsComponent } from './prod-card/product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    ProdCardComponent,
    UaCurrencyPipe,
    ColorDirective,
    ProductDetailsComponent,
    ProductListComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    ProductsRouteRoutingModule
  ]
})
export class ProductsRouteModule { }
