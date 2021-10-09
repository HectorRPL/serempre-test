import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStartingProductPriceComponent } from './show-starting-product-price.component';

describe('ShowStartingProductPriceComponent', () => {
  let component: ShowStartingProductPriceComponent;
  let fixture: ComponentFixture<ShowStartingProductPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStartingProductPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStartingProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
