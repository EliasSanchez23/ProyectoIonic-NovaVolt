import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearVentaPage } from './crear-venta.page';

describe('CrearVentaPage', () => {
  let component: CrearVentaPage;
  let fixture: ComponentFixture<CrearVentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
