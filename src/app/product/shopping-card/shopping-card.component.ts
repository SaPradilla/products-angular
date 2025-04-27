import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule    } from '@angular/material/icon';
import { ShoppingCartService } from '../../core/services/shopping_cart.service';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss'
})
export class ShoppingCardComponent {
  shoppingCartStatus = computed(() => this.shoppingCartService.statusSignal());
  carrito: any[];

  constructor(
    private cartService:ShoppingCartService,
    private shoppingCartService: ShoppingCartService,
  ){
    this.carrito = this.cartService.obtenerCarrito()
  }


  agregarCarrito(guitarra: any) {
    this.cartService.agregarCarrito(guitarra);
    this.carrito = this.cartService.obtenerCarrito();
  }

  decrementar(id: number) {
    this.cartService.decrementar(id);
    this.carrito = this.cartService.obtenerCarrito();
  }

  incrementar(id: number) {
    this.cartService.incrementar(id);
    this.carrito = this.cartService.obtenerCarrito();
  }

  eliminar(id: number) {
    this.cartService.eliminar(id);
    this.carrito = this.cartService.obtenerCarrito();
  }

  vaciar() {
    this.cartService.vaciar();
    this.carrito = this.cartService.obtenerCarrito();
  }



  toggleStatus(): void {
    this.shoppingCartService.toggleShoppingCartStatus();
  }

  getType(variable: any): string {
    return typeof variable;
  }
}
