import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { Product, responseGetProducts } from '../../core/models/products.interface';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent,AsyncPipe],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})

export class ListProductsComponent  {

  public productsList$!: Observable<responseGetProducts>;
  public errorMsg!: string;
  public currentPage:number = 1;

  constructor(
    private service:ProductService
  ){}

  // al montar
  ngOnInit():void{
    this.loadProducts(this.currentPage); 
  }

  loadProducts(page:number){

    this.productsList$ = this.service.getProducts(page).pipe(
      tap( (x)=> { console.log(x) } ),
      catchError((error:string)=>{
          this.errorMsg = error;
          // Retorna un observable vacio
          return EMPTY;
      })
  )};
  // pasar de pagina
  nextPage() {
    this.currentPage++;
    this.loadProducts(this.currentPage);
  };
  // devolver
  prevPage(){

   if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts(this.currentPage);
    }
  }



}
