import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/product/product-model';

@Component({
  selector: 'app-show-product-images',
  templateUrl: './show-product-images.component.html',
  styleUrls: ['./show-product-images.component.css']
})
export class ShowProductImagesComponent implements OnInit {

  @Input() images: Image[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
