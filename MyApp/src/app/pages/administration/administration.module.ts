import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { UaCurrencyPipe } from 'src/app/shared/pipes/ua-currency.pipes';

@NgModule({
  declarations: [
    AdministrationComponent,
    ProductsComponent,
    SidebarComponent,
    LoginComponent,
    UsersComponent,
    ProductItemComponent,
    UaCurrencyPipe,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
