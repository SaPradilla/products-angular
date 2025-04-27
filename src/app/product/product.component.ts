import { Component, computed, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Product } from '../core/models/products.interface';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormComponent } from './form/form.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FooterComponent,MatButtonModule,NavbarComponent,ListProductsComponent,FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(FormComponent,{
      enterAnimationDuration:'400ms', 
      exitAnimationDuration:'200ms'
    });
  }

  public modal:boolean = false;

  handleModal(){
    this.modal = !this.modal
  }



}
