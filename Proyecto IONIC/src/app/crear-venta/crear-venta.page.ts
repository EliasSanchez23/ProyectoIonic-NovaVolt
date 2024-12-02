import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.page.html',
  styleUrls: ['./crear-venta.page.scss'],
})
export class CrearVentaPage {
  nombreProducto: string = '';
  precio: number = 0;
  tipoProducto: string = '';
  descripcion: string = '';
  foto: File | null = null;

  constructor(private router: Router) {}

  crearVenta() {
    // Simulando la creación de una venta (en un proyecto real, aquí se haría la petición a la base de datos)
    console.log('Venta creada:', {
      nombreProducto: this.nombreProducto,
      precio: this.precio,
      tipoProducto: this.tipoProducto,
      descripcion: this.descripcion,
      foto: this.foto,
    });

    // Redirigir a la lista de artículos después de crear la venta
    this.router.navigate(['/lista-articulos']);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.foto = input.files[0]; // Guardamos la primera foto seleccionada
    }
  }
}
