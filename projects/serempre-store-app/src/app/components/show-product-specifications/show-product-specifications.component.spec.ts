import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductSpecificationsComponent } from './show-product-specifications.component';

describe('ShowProductSpecificationsComponent', () => {
  let component: ShowProductSpecificationsComponent;
  let fixture: ComponentFixture<ShowProductSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductSpecificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
