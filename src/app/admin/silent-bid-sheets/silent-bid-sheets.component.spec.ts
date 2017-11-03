import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentBidSheetsComponent } from './silent-bid-sheets.component';

describe('SilentBidSheetsComponent', () => {
  let component: SilentBidSheetsComponent;
  let fixture: ComponentFixture<SilentBidSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilentBidSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilentBidSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
