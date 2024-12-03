import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycostComponent } from './modifycost.component';

describe('ModifycostComponent', () => {
  let component: ModifycostComponent;
  let fixture: ComponentFixture<ModifycostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifycostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifycostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
