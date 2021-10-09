import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductDescriptionComponent } from './show-product-description.component';

describe('ShowProductDescriptionComponent', () => {
  let component: ShowProductDescriptionComponent;
  let fixture: ComponentFixture<ShowProductDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
