import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDonatedItemsComponent } from './modify-donated-items.component';

describe('ModifyDonatedItemsComponent', () => {
  let component: ModifyDonatedItemsComponent;
  let fixture: ComponentFixture<ModifyDonatedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDonatedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDonatedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
