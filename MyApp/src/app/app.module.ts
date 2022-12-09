import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComponentInteractionModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './products/header/header.component';
import { ProdCardComponent } from './products/prod-card/prod-card.component';
import { UaCurrencyPipe } from './products/pipes/ua-currency.pipes'
import { ColorDirective } from './products/directive/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    // ComponentInteractionModule
    ProductsComponent,
    HeaderComponent,
    ProdCardComponent,
    UaCurrencyPipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
