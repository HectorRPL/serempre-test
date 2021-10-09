import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ProductModel } from '../../../models/product/product-model';

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.css']
})
export class ViewProductDetailComponent implements OnInit {

  public product: ProductModel | undefined;

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.getProductById('1');
  }

  getProductById(id: string): void {
    this.productService.getProductById(id).pipe().subscribe(
      product => this.product = product,
      error => console.log('Some error occur...'),
    );
  }

}
