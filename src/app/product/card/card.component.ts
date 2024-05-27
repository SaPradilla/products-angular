import { Component, Input, input } from '@angular/core';
import { Product } from '../../core/models/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() productItem! : Product;

  // producto: Product = {
  //   id:1,
  //   categoryId:2,
  //   name:'Headphones',
  //   description:'son blancos y se ensucian facil',
  //   amount:40,
  //   brand:'Apple',
  //   value:1150000,
  //   image:'https://www.apple.com/v/airpods-max/f/images/overview/hero__gnfk5g59t0qe_xlarge.png',
  //   liked:false,
  //   status:true,
  //   category:{
  //     id:2,
  //     name:'Tecnologia'
  //   }
  // }


}
