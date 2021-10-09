import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductDescriptionComponent } from './components/show-product-description/show-product-description.component';
import { ShowProductImagesComponent } from './components/show-product-images/show-product-images.component';
import { ShowTechnicalDetailsComponent } from './components/show-technical-details/show-technical-details.component';
import { SelectProductColorComponent } from './components/select-product-color/select-product-color.component';
import { ShowProductSpecificationsComponent } from './components/show-product-specifications/show-product-specifications.component';
import { PriceProductFooterComponent } from './components/price-product-footer/price-product-footer.component';
import { SelectProductFeaturesComponent } from './components/select-product-features/select-product-features.component';
import { SelectProductWarrantyComponent } from './components/select-product-warranty/select-product-warranty.component';
import { ShowTitleProductComponent } from './components/show-title-product/show-title-product.component';
import { ShowStartingProductPriceComponent } from './components/show-starting-product-price/show-starting-product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowProductDescriptionComponent,
    ShowProductImagesComponent,
    ShowTechnicalDetailsComponent,
    SelectProductColorComponent,
    ShowProductSpecificationsComponent,
    PriceProductFooterComponent,
    SelectProductFeaturesComponent,
    SelectProductWarrantyComponent,
    ShowTitleProductComponent,
    ShowStartingProductPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
