import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage {

  constructor(private router: Router) {}

  logout() {
    // Elimina el token o datos de sesión si existen
    localStorage.removeItem('authToken'); // Cambia 'authToken' si es necesario
    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }
}
