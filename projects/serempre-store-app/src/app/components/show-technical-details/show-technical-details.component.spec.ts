import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTechnicalDetailsComponent } from './show-technical-details.component';

describe('ShowTechnicalDetailsComponent', () => {
  let component: ShowTechnicalDetailsComponent;
  let fixture: ComponentFixture<ShowTechnicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTechnicalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTechnicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
