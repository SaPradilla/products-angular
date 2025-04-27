import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { EMPTY, Observable, catchError, tap,map, finalize } from 'rxjs';
import { Product, responseGetProducts } from '../../core/models/products.interface';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SkeletonCardComponent } from '../card/skeleton-card/skeleton-card.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [SkeletonCardComponent,CardComponent,AsyncPipe,MatButtonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})

export class ListProductsComponent  {

  // @Input() handleModal! : ()=> void ;
  @Output() handleModal = new EventEmitter<void>();

  public productsList$!: Observable<responseGetProducts>;
  public errorMsg!: string;
  public currentPage:number = 1;
  public items = Array(8).fill(0);
  public loading:boolean = false;

  constructor(
    private service:ProductService,
    private router:Router
  ){}

  // al montar
  ngOnInit():void{
    this.loadProducts(this.currentPage);
  }

  loadProducts(page:number){
    this.loading = true;
    this.productsList$ = this.service.getProducts(page).pipe(
      catchError((error:string)=>{
          this.errorMsg = error;
          // Retorna un observable vacio
          return EMPTY;
      }),
      finalize(()=>{
        this.loading = false;
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

  handleModalEmit(){
    this.handleModal.emit();
  }

  showProduct(product:Product){
    this.router.navigate(['/shop',product.id])
  }


}
