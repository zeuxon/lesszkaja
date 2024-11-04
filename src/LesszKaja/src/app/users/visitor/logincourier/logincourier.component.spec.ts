import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincourierComponent } from './logincourier.component';

describe('LogincourierComponent', () => {
  let component: LogincourierComponent;
  let fixture: ComponentFixture<LogincourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogincourierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogincourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
