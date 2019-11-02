import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcreditoPage } from './newcredito.page';

describe('NewcreditoPage', () => {
  let component: NewcreditoPage;
  let fixture: ComponentFixture<NewcreditoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcreditoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
