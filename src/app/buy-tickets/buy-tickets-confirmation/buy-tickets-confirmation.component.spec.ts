import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketsConfirmationComponent } from './buy-tickets-confirmation.component';

describe('BuyTicketsConfirmationComponent', () => {
  let component: BuyTicketsConfirmationComponent;
  let fixture: ComponentFixture<BuyTicketsConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTicketsConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTicketsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
