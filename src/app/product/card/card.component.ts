import { Component, Input, input } from '@angular/core';
import { Product } from '../../core/models/products.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,FormsModule,MatChipsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() productItem! : Product;

  inputTest:string = '';

}
