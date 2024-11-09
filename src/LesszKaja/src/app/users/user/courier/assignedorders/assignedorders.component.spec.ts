import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedordersComponent } from './assignedorders.component';

describe('AssignedordersComponent', () => {
  let component: AssignedordersComponent;
  let fixture: ComponentFixture<AssignedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
