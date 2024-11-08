import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrestaurantComponent } from './registerrestaurant.component';

describe('RegisterrestaurantComponent', () => {
  let component: RegisterrestaurantComponent;
  let fixture: ComponentFixture<RegisterrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterrestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
