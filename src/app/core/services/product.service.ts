import { Injectable } from '@angular/core';
import { responseGetProducts,Category, Product } from '../models/products.interface';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http:HttpClient
  ) {}
  getProduct(id:any){
    return this.http.get<Product>(`${environment.BASE_URL}/products/${id}`)
  }
  getProducts(page:number): Observable<responseGetProducts> {
    return this.http.get<responseGetProducts>(`${environment.BASE_URL}/products?_page=${page}&_per_page=8`);
  }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.BASE_URL}/categories`);
  }
  addProduct(data:Product){
    return this.http.post<Product>(`${environment.BASE_URL}/products`,data)
  }
}
