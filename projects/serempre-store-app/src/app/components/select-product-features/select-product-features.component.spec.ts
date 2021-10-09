import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductFeaturesComponent } from './select-product-features.component';

describe('SelectProductFeaturesComponent', () => {
  let component: SelectProductFeaturesComponent;
  let fixture: ComponentFixture<SelectProductFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProductFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
