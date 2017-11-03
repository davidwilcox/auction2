import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCatalogComponent } from './live-catalog.component';

describe('LiveCatalogComponent', () => {
  let component: LiveCatalogComponent;
  let fixture: ComponentFixture<LiveCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
