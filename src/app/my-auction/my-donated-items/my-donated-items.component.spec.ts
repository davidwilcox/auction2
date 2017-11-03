import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDonatedItemsComponent } from './my-donated-items.component';

describe('MyDonatedItemsComponent', () => {
  let component: MyDonatedItemsComponent;
  let fixture: ComponentFixture<MyDonatedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDonatedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDonatedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
