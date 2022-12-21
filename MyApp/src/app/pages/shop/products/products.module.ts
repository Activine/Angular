import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRouteRoutingModule } from './products-route-routing.module';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ProdCardComponent } from '../shared/prod-card/prod-card.component';
import { UaCurrencyPipe } from '../../../shared/pipes/ua-currency.pipes';
import { ColorDirective } from '../shared/directives/color.directive';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CartComponent } from '../cart/cart.component';
import { CartItemComponent } from '../shared/cart-item/cart-item.component';
import { ButtonComponent } from '../shared/button/button.component';

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
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    ProductsRouteRoutingModule
  ]
})
export class ProductsRouteModule { }
