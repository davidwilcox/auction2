import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateItemConfirmationComponent } from './donate-item-confirmation.component';

describe('DonateItemConfirmationComponent', () => {
  let component: DonateItemConfirmationComponent;
  let fixture: ComponentFixture<DonateItemConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateItemConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateItemConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
