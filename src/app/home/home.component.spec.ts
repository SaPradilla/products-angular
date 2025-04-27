import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideRouter, Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
// import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers:[provideRouter([]),],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the next page when the button is clicked', () => {
    spyOn(component, 'redirectPage').and.callThrough();
    spyOn(router, 'navigate');

    const buttonRedirect = fixture.nativeElement.querySelector('[data-testId="button-redirect"]');
    buttonRedirect.click();

    expect(component.redirectPage).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/shop']);
  });
});
