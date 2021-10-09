import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceProductFooterComponent } from './price-product-footer.component';

describe('PriceProductFooterComponent', () => {
  let component: PriceProductFooterComponent;
  let fixture: ComponentFixture<PriceProductFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceProductFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceProductFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
