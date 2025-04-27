import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { UserOneMock } from '../../../mock/user.mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      // objectos desconocidos de angular material
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;;
    // se le pasa el props 
    component.productItem = UserOneMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show productItem in the component',()=>{

    
    const renderComponent = fixture.nativeElement as HTMLElement;
    
    const image = renderComponent.querySelector('[data-testid="image"]') as HTMLImageElement;
    const value = renderComponent.querySelector('[data-testid="value"]');
    const name = renderComponent.querySelector('[data-testid="name"]');
    const brand = renderComponent.querySelector('[data-testid="brand"]');

    expect(image).toBeTruthy();
    expect(image?.src).toBe(UserOneMock.image);
    expect(value).toBeTruthy();
    expect(value?.textContent?.trim()).toBe(`${UserOneMock.value.toFixed(2)}$`);
    expect(name).toBeTruthy();
    expect(name?.textContent?.trim()).toBe(UserOneMock.name);
    expect(brand).toBeTruthy();
    expect(brand?.textContent?.trim()).toBe(UserOneMock.brand);    
  })
 
});