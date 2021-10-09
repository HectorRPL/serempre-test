import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTitleProductComponent } from './show-title-product.component';

describe('ShowTitleProductComponent', () => {
  let component: ShowTitleProductComponent;
  let fixture: ComponentFixture<ShowTitleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTitleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTitleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
