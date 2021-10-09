import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-product-footer',
  templateUrl: './price-product-footer.component.html',
  styleUrls: ['./price-product-footer.component.css']
})
export class PriceProductFooterComponent implements OnInit {

  @Input() price: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
