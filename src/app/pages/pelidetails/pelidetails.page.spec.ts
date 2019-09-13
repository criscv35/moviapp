import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelidetailsPage } from './pelidetails.page';

describe('PelidetailsPage', () => {
  let component: PelidetailsPage;
  let fixture: ComponentFixture<PelidetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelidetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelidetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
