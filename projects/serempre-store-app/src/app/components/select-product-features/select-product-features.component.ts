import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../models/product/product-model';

@Component({
  selector: 'app-select-product-features',
  templateUrl: './select-product-features.component.html',
  styleUrls: ['./select-product-features.component.css']
})
export class SelectProductFeaturesComponent implements OnInit {

  @Input() features: Feature[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
