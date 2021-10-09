import { Component, Input, OnInit } from '@angular/core';
import { Warranty } from '../../models/product/product-model';

@Component({
  selector: 'app-select-product-warranty',
  templateUrl: './select-product-warranty.component.html',
  styleUrls: ['./select-product-warranty.component.css']
})
export class SelectProductWarrantyComponent implements OnInit {

  @Input() warranty: Warranty[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
