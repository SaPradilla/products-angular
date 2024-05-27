import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Product } from '../core/models/products.interface';
import { ListProductsComponent } from './list-products/list-products.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavbarComponent,ListProductsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
