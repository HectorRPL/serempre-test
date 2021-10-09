import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductColorComponent } from './select-product-color.component';

describe('SelectProductColorComponent', () => {
  let component: SelectProductColorComponent;
  let fixture: ComponentFixture<SelectProductColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProductColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
