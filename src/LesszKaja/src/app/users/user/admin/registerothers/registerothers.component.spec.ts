import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterothersComponent } from './registerothers.component';

describe('RegisterothersComponent', () => {
  let component: RegisterothersComponent;
  let fixture: ComponentFixture<RegisterothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterothersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
