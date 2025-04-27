import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../core/models/products.interface';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from '../footer/footer.component';
import { ShoppingCartService } from '../../core/services/shopping_cart.service';


@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [FooterComponent,MatButtonModule,MatIconModule,NavbarComponent,MatChipsModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})

export class ViewProductComponent implements OnInit{

  product:any | Product;
  carrito: any[];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private cartService:ShoppingCartService,
  ){
    this.carrito = this.cartService.obtenerCarrito()
  }


  ngOnInit():void{
    this.product = this.route.snapshot.data['product']
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


  redirectToBack():void{
    this.router.navigate(['/shop'])
  }
}
