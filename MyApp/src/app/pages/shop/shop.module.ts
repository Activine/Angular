import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRouteRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { UaCurrencyPipe } from '../../shared/pipes/ua-currency.pipes';
import { ColorDirective } from './shared/directives/color.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './shared/components/cart-item/cart-item.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CartTooltipComponent } from './shared/components/cart-tooltip/cart-tooltip.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    ShopComponent,
    HeaderComponent,
    ProductCardComponent,
    UaCurrencyPipe,
    ColorDirective,
    ProductDetailsComponent,
    ProductListComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
    ButtonComponent,
    CartTooltipComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    ShopRouteRoutingModule
  ]
})
export class ShopRouteModule { }
