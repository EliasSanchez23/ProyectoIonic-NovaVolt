import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa el servicio de navegación
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cartItems: any[] = [];
  totals: any = {};

  constructor(private cartService: CartService, private navCtrl: NavController) {}

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.cartItems = this.cartService.getCartItems();
    this.totals = this.cartService.calculateTotal();
  }

  removeItem(itemId: number) {
    this.cartService.removeItem(itemId);
    this.updateCart();
  }

  proceedToCheckout() {
    console.log('Procediendo al pago con los siguientes artículos:', this.cartItems);
    alert('¡Procediendo al pago!');
  }

  goBack() {
    this.navCtrl.back(); // Navega a la página anterior
  }
}
