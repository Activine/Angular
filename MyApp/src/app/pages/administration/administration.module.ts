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
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';



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
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdministrationModule { }
