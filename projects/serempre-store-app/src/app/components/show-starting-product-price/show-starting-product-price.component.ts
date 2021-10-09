import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-starting-product-price',
  templateUrl: './show-starting-product-price.component.html',
  styleUrls: ['./show-starting-product-price.component.css']
})
export class ShowStartingProductPriceComponent implements OnInit {

  @Input() price: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
