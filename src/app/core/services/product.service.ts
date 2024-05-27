import { Injectable } from '@angular/core';
import { Product, responseGetProducts } from '../models/products.interface';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  constructor(
    private http:HttpClient
  ) {}

  getProducts(page:number):Observable<responseGetProducts>{
    return this.http.get<responseGetProducts>(`${environment.BASE_URL}/products?_page=${page}&_per_page=3`)
  }
  
}
