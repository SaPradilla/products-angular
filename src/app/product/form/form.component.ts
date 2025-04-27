import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, catchError, EMPTY, startWith, map, switchMap } from 'rxjs';
import { Category, Product } from '../../core/models/products.interface';
import { ProductService } from '../../core/services/product.service';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule    } from '@angular/material/icon';
import { MatInputModule   } from '@angular/material/input';
import { MatSelectModule  } from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ThemeService } from '../../core/services/theme.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    AsyncPipe,
    MatDialogClose, 
    MatDialogActions, 
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  public categories$!: Observable<Category[]>;
  public errorMessage!: string;
  public proyectForm!: FormGroup;
  public isFormSubmitted: boolean = false;
  public filteredOptions!: Observable<Category[]>;
  readonly dialogRef = inject(MatDialogRef<FormComponent>);
  isDarkTheme = computed(() => this.themeService.isDarkTheme);

  constructor(
    private service: ProductService,
    private themeService : ThemeService
  ) {}

  ngOnInit() {
    this.proyectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      value: new FormControl(null, [Validators.required]),
      image: new FormControl('', [Validators.required]),
      liked: new FormControl(false),
      status: new FormControl(true),
      category: new FormControl(null, [Validators.required]),
    });

    this.loadCategories()

    this.filteredOptions = this.proyectForm.get('category')!.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.filter(value))
    );

    
  }

  loadCategories() {
    this.categories$ = this.service.getCategories().pipe(
      catchError((error: string) => {
        console.error(error);
        return EMPTY;
      })
    );
  }

  createProduct(data: Product) {

    this.service.addProduct(data).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    ).subscribe()

  }
  // Enviar formulario
  onSubmit() {

    console.log(this.proyectForm.valid);
    console.log(this.proyectForm.value);
    if (this.proyectForm.valid) {

      let product: Product;

      console.log(this.proyectForm.value.category);
      this.categories$.subscribe(categories => {
        const categoryFind = categories.find(value => value.id === this.proyectForm.value.category);

        product = {
          id: '10',
          ...this.proyectForm.value,
          category: [categoryFind],
        };

        // enviar a la db 
        this.createProduct(product)
        // cerrar modal
        this.dialogRef.close();
      });

    }

    this.isFormSubmitted = true;
  }

  private filter(value: string | Category): Observable<Category[]> {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value?.name.toLowerCase();
    return this.categories$.pipe(
      map(categories => categories.filter(option => option.name.toLowerCase().includes(filterValue)))
    );
  }

  displayFn(category: Category): string {
    return category ? category.name : '';
  }

}
