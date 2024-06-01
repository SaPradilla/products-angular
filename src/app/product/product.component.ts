import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Product } from '../core/models/products.interface';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavbarComponent,ListProductsComponent,FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {

  public modal:boolean = false;

  handleModal(){
    this.modal = !this.modal
  }
}
