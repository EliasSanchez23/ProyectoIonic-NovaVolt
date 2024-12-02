import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  // Método para iniciar sesión
  async login() {
    try {
      const res = await this.authService.login(this.email, this.password);
      console.log('Inicio de sesión exitoso:', res);
      this.navCtrl.navigateForward('/tienda'); // Cambiar '/home' a '/tienda'
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      this.showErrorAlert(err);
    }
  }

  // Método para mostrar un mensaje de error
  async showErrorAlert(err: any) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: this.getErrorMessage(err),
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  // Método para obtener un mensaje amigable según el error
  getErrorMessage(err: any): string {
    switch (err.code) {
      case 'auth/invalid-email':
        return 'El email no es válido. Por favor verifica e intenta de nuevo.';
      case 'auth/user-not-found':
        return 'No se encontró un usuario con ese email.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      case 'auth/user-disabled':
        return 'El usuario ha sido deshabilitado.';
      default:
        return 'Ocurrió un error. Por favor intenta de nuevo.';
    }
  }
}
