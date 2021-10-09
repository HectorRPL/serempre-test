import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./views/product/product.module').then(module => module.ProductModule),
    data: {preload: false}
  },
  {
    path: '',
    redirectTo: '/product/detail',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/product/detail'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
