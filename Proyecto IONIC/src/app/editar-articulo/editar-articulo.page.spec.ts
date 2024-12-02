import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarArticuloPage } from './editar-articulo.page';

describe('EditarArticuloPage', () => {
  let component: EditarArticuloPage;
  let fixture: ComponentFixture<EditarArticuloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarArticuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
