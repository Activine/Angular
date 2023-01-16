import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'products',
  // },
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'products',
        pathMatch: 'full',
        component: ProductsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        pathMatch:'full',
        component: UsersComponent,
        canActivate: [AuthGuard]
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
