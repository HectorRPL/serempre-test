import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { PriceProductFooterModule } from '../../components/price-product-footer/price-product-footer.module';
import { SelectProductColorModule } from '../../components/select-product-color/select-product-color.module';
import { SelectProductFeaturesModule } from '../../components/select-product-features/select-product-features.module';
import { SelectProductWarrantyModule } from '../../components/select-product-warranty/select-product-warranty.module';
import { ShowProductDescriptionModule } from '../../components/show-product-description/show-product-description.module';
import { ShowProductImagesModule } from '../../components/show-product-images/show-product-images.module';
import { ShowProductSpecificationsModule } from '../../components/show-product-specifications/show-product-specifications.module';
import { ShowStartingProductPriceModule } from '../../components/show-starting-product-price/show-starting-product-price.module';
import { ShowTechnicalDetailsModule } from '../../components/show-technical-details/show-technical-details.module';
import { ShowTitleProductModule } from '../../components/show-title-product/show-title-product.module';
import { ProductService } from '../../services/product/product.service';
import { ShowProductDetailsModule } from '../../components/show-product-details/show-product-details.module';


@NgModule({
  declarations: [
    ProductComponent,
    ViewProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PriceProductFooterModule,
    SelectProductColorModule,
    SelectProductFeaturesModule,
    SelectProductWarrantyModule,
    ShowProductDescriptionModule,
    ShowProductImagesModule,
    ShowProductSpecificationsModule,
    ShowStartingProductPriceModule,
    ShowTechnicalDetailsModule,
    ShowTitleProductModule,
    ShowProductDetailsModule,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {
}
