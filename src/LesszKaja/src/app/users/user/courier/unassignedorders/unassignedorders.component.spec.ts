import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedordersComponent } from './unassignedorders.component';

describe('UnassignedordersComponent', () => {
  let component: UnassignedordersComponent;
  let fixture: ComponentFixture<UnassignedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnassignedordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnassignedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
