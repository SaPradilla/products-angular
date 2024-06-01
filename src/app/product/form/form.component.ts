import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, catchError,EMPTY } from 'rxjs';
import { Category, Product } from '../../core/models/products.interface';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // emit padre
  @Input() handleModal! : ()=> void;

  public categories$!: Observable<Category[]>;
  public errorMessage!:string;
  public proyectForm: FormGroup;
  public isFormSubmitted: boolean = false;
  
  constructor(
    private service:ProductService

  ){
    this.proyectForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      amount: new FormControl(null,[Validators.required]),
      brand: new FormControl('',[Validators.required]),
      value: new FormControl(null,[Validators.required]),
      image: new FormControl('',[Validators.required]),
      liked: new FormControl(false),
      status: new FormControl(true),
      category: new FormControl(null,[Validators.required]),
    });
  }

  ngOnInit(): void {
   this.loadCategories()
  }

  loadCategories(){
    this.categories$ = this.service.getCategories().pipe(
      catchError((error:string)=>{
        this.errorMessage = error;
        // Retorna un observable vacio
        return EMPTY;
      })
    )
  }
  
  
  createProduct(data:Product){

    this.service.addProduct(data).pipe(
      catchError((error:string)=>{
        this.errorMessage = error;
        return EMPTY;
      })
    ).subscribe()

  }
  // Enviar formulario
  onSubmit(){

    console.log(this.proyectForm.valid);
    if(this.proyectForm.valid){

      let product:Product;
      
      console.log(this.proyectForm.value.category);
      this.categories$.subscribe(categories => {
        const categoryFind = categories.find(value => value.id === this.proyectForm.value.category);
  
        product = {
          id: '10' ,
          ...this.proyectForm.value,
          category: [categoryFind],
        };

       // enviar a la db 
       this.createProduct(product)
       this.handleModal()
      });
      
    }
    
    this.isFormSubmitted = true;
  }


}
