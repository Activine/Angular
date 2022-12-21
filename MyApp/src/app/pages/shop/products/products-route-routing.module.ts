import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent,
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: ProductDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRouteRoutingModule { }
