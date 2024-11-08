import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierprofileComponent } from './courierprofile.component';

describe('CourierprofileComponent', () => {
  let component: CourierprofileComponent;
  let fixture: ComponentFixture<CourierprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourierprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourierprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
