import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductWarrantyComponent } from './select-product-warranty.component';

describe('SelectProductWarrantyComponent', () => {
  let component: SelectProductWarrantyComponent;
  let fixture: ComponentFixture<SelectProductWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProductWarrantyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
