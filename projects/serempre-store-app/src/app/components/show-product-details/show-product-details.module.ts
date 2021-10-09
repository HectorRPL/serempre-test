import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProductDetailsComponent } from './show-product-details.component';



@NgModule({
  declarations: [
    ShowProductDetailsComponent
  ],
  exports: [
    ShowProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShowProductDetailsModule { }
