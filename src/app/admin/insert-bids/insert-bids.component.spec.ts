import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBidsComponent } from './insert-bids.component';

describe('InsertBidsComponent', () => {
  let component: InsertBidsComponent;
  let fixture: ComponentFixture<InsertBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
