import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycourierComponent } from './modifycourier.component';

describe('ModifycourierComponent', () => {
  let component: ModifycourierComponent;
  let fixture: ComponentFixture<ModifycourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifycourierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifycourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
