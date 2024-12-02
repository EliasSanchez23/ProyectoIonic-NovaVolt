import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.page.html',
  styleUrls: ['./editar-articulo.page.scss'],
})
export class EditarArticuloPage implements OnInit {
  articulo: any = {};
  selectedFile: File | null = null; // Para almacenar el archivo seleccionado

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const articuloId = this.route.snapshot.paramMap.get('id');
    
    // Verificar que articuloId no sea null antes de usarlo
    if (articuloId) {
      this.articulo = this.obtenerArticuloPorId(articuloId);
    } else {
      console.error('ID de artículo no encontrado');
      this.router.navigate(['/lista-articulos']); // Redirigir si el ID es null
    }
  }

  obtenerArticuloPorId(id: string) {
    const articulos = [
      { id: 1, nombreProducto: 'Laptop', precio: 1000, tipoProducto: 'Electrónicos', descripcion: 'Laptop de última generación.' },
      { id: 2, nombreProducto: 'Camisa', precio: 25, tipoProducto: 'Ropa', descripcion: 'Camisa de algodón cómoda.' }
    ];
    return articulos.find(art => art.id === parseInt(id, 10));
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // Obtener el primer archivo seleccionado
    if (file) {
      this.selectedFile = file; // Almacenar el archivo seleccionado
      console.log('Archivo seleccionado:', this.selectedFile.name);
    }
  }

  guardarCambios() {
    console.log('Cambios guardados:', this.articulo);
    // Aquí puedes añadir lógica para subir el archivo si es necesario
    this.router.navigate(['/lista-articulos']); // Redirigir de nuevo a la lista
  }
}
