import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'shop',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./pages/shop/shop.module')
      .then(m => m.ShopRouteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
