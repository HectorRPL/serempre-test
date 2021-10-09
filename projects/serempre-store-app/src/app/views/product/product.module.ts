import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';



@NgModule({
  declarations: [
    ProductComponent,
    ViewProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
