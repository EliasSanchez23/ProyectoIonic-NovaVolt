import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // Método para registrarse
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Método para iniciar sesión
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Método para cerrar sesión
  logout() {
    return this.afAuth.signOut();
  }

  // Método para obtener el estado del usuario autenticado
  getUser() {
    return this.afAuth.authState;
  }
}
