import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
  }

  calculateTotal() {
    const subtotal = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxes = subtotal * 0.02; // 2% impuestos
    return { subtotal, taxes, total: subtotal + taxes };
  }
}
