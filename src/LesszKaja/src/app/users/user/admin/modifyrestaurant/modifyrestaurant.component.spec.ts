import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyrestaurantComponent } from './modifyrestaurant.component';

describe('ModifyrestaurantComponent', () => {
  let component: ModifyrestaurantComponent;
  let fixture: ComponentFixture<ModifyrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyrestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
