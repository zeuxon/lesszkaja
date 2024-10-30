import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierComponent } from './courier.component';

describe('CourierComponent', () => {
  let component: CourierComponent;
  let fixture: ComponentFixture<CourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
