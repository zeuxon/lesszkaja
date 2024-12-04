import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIngredientListComponent } from './products-ingredient-list.component';

describe('ProductsIngredientListComponent', () => {
  let component: ProductsIngredientListComponent;
  let fixture: ComponentFixture<ProductsIngredientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsIngredientListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
