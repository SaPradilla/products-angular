import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  mostrar:boolean = true;
}
