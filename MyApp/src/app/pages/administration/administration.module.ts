import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablesComponent } from './shared/components/tables/tables.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    ProductsComponent,
    SidebarComponent,
    LoginComponent,
    UsersComponent,
    ProductItemComponent,
    TablesComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule
  ]
})
export class AdministrationModule { }
