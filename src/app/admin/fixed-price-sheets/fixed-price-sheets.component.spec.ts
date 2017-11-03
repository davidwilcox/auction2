import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPriceSheetsComponent } from './fixed-price-sheets.component';

describe('FixedPriceSheetsComponent', () => {
  let component: FixedPriceSheetsComponent;
  let fixture: ComponentFixture<FixedPriceSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedPriceSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPriceSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
