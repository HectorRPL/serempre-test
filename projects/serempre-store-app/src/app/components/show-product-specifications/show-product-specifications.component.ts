import { Component, Input, OnInit } from '@angular/core';
import { Specs } from '../../models/product/product-model';

@Component({
  selector: 'app-show-product-specifications',
  templateUrl: './show-product-specifications.component.html',
  styleUrls: ['./show-product-specifications.component.css']
})
export class ShowProductSpecificationsComponent implements OnInit {

  @Input() specifications: Specs | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
