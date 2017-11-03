import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeForItemsComponent } from './charge-for-items.component';

describe('ChargeForItemsComponent', () => {
  let component: ChargeForItemsComponent;
  let fixture: ComponentFixture<ChargeForItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeForItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeForItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
