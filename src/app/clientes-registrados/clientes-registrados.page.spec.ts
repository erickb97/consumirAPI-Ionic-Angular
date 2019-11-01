import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRegistradosPage } from './clientes-registrados.page';

describe('ClientesRegistradosPage', () => {
  let component: ClientesRegistradosPage;
  let fixture: ComponentFixture<ClientesRegistradosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesRegistradosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesRegistradosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
