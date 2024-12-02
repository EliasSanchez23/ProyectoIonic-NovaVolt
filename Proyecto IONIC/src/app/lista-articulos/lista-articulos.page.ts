import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.page.html',
  styleUrls: ['./lista-articulos.page.scss'],
})
export class ListaArticulosPage {
  articulos = [
    { id: 1, nombreProducto: 'Laptop', precio: 1000, tipoProducto: 'Electrónicos', descripcion: 'Laptop de última generación.' },
    { id: 2, nombreProducto: 'Camisa', precio: 25, tipoProducto: 'Ropa', descripcion: 'Camisa de algodón cómoda.' }
    // Otros artículos...
  ];

  constructor(private router: Router) {}

  editarArticulo(articulo: any) {
    // Redirigir a la página de edición con el ID del artículo
    this.router.navigate(['/editar-articulo', articulo.id]);
  }

  eliminarArticulo(articulo: any) {
    if (confirm(`¿Estás seguro de que quieres eliminar el artículo "${articulo.nombreProducto}"?`)) {
      this.articulos = this.articulos.filter(a => a !== articulo);
    }
  }
}
