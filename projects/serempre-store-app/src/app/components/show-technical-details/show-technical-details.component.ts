import { Component, Input, OnInit } from '@angular/core';
import { TechnicalDetail } from '../../models/product/product-model';

@Component({
  selector: 'app-show-technical-details',
  templateUrl: './show-technical-details.component.html',
  styleUrls: ['./show-technical-details.component.css']
})
export class ShowTechnicalDetailsComponent implements OnInit {

  @Input() technicalDetails: TechnicalDetail[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
