import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

    private _shopping_cart_status = signal<boolean>(false);
    private carrito: any[] = [];

    constructor() {
      const storedCart = localStorage.getItem('carrito');
      if (storedCart) {
        this.carrito = JSON.parse(storedCart);
      }
    }
    private saveCart() {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  

    agregarCarrito(product: any) {
      const existeCarrito = this.carrito.findIndex(producto => producto.id === product.id);
      if (existeCarrito >= 0) {
        this.carrito[existeCarrito].cantidad++;
      } else {
        product.cantidad = 1;
        this.carrito.push(product);
      }
      this.saveCart();
    }
  
    decrementar(id: number) {
      const index = this.carrito.findIndex(producto => producto.id === id);
      if (this.carrito[index].cantidad <= 1) return;
      this.carrito[index].cantidad--;
      this.saveCart();
    }
  
    incrementar(id: number) {
      const index = this.carrito.findIndex(producto => producto.id === id);
      this.carrito[index].cantidad++;
      this.saveCart();
    }
  
    eliminar(id: number) {
      this.carrito = this.carrito.filter(producto => producto.id !== id);
      this.saveCart();
    }
  
    vaciar() {
      this.carrito = [];
      this.saveCart();
    }
  
    obtenerCarrito() {
      return this.carrito;
    }
    toggleShoppingCartStatus() {
      this._shopping_cart_status.set(!this._shopping_cart_status());
    }
  
    getShoppingCartStatus(): boolean {
      return this._shopping_cart_status();
    }
  
    get statusSignal() {
      return this._shopping_cart_status;
    }

}
