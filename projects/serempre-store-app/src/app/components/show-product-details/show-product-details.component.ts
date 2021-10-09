import { Component, Input, OnInit } from '@angular/core';
import { Detail, Warranty } from '../../models/product/product-model';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {

  @Input() details: Detail[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
