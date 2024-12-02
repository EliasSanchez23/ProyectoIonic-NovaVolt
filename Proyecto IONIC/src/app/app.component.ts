import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  logout() {
    // Elimina el token o datos de sesión si existen
    localStorage.removeItem('authToken'); // Cambia 'authToken' según el nombre que uses
    // Redirige al usuario al login
    this.router.navigate(['/login']);
  }
}
