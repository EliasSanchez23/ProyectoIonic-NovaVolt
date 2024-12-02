import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  registrarUsuario() {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    // Guardar el usuario en localStorage
    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    // Redirigir a la página de tienda después del registro
    this.router.navigate(['/tienda']);
  }
}
