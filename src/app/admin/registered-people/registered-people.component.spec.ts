import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPeopleComponent } from './registered-people.component';

describe('RegisteredPeopleComponent', () => {
  let component: RegisteredPeopleComponent;
  let fixture: ComponentFixture<RegisteredPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
