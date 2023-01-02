import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'products',
        pathMatch: 'full',
        component: ProductsComponent,
      },
      {
        path: 'users',
        pathMatch:'full',
        component: UsersComponent,
      },
      {
        path: 'logout',
        pathMatch: 'full',
        component: LoginComponent,
      }
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
export class AdministrationRoutingModule { }
