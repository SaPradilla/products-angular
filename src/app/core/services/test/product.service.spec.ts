import { TestBed } from '@angular/core/testing';

import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  

  it('should call method get all products',()=>{
    spyOn(service,'getProducts').and.callThrough();
  });
  
});
