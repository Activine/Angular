import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/shop/shop.module')
      .then(m => m.ShopModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./pages/administration/administration.module')
      .then(m => m.AdministrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
