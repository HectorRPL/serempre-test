import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-title-product',
  templateUrl: './show-title-product.component.html',
  styleUrls: ['./show-title-product.component.css']
})
export class ShowTitleProductComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() description: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
