import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/product/product-model';

@Component({
  selector: 'app-select-product-color',
  templateUrl: './select-product-color.component.html',
  styleUrls: ['./select-product-color.component.css']
})
export class SelectProductColorComponent implements OnInit {

  @Input() colors: Color[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
