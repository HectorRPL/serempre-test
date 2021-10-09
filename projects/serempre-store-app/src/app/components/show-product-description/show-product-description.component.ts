import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product-description',
  templateUrl: './show-product-description.component.html',
  styleUrls: ['./show-product-description.component.css']
})
export class ShowProductDescriptionComponent implements OnInit {

  @Input() description: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
