import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercourierComponent } from './registercourier.component';

describe('RegistercourierComponent', () => {
  let component: RegistercourierComponent;
  let fixture: ComponentFixture<RegistercourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistercourierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistercourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
