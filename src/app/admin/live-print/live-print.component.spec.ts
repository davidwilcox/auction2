import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePrintComponent } from './live-print.component';

describe('LivePrintComponent', () => {
  let component: LivePrintComponent;
  let fixture: ComponentFixture<LivePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
