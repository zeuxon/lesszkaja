import { TestBed } from '@angular/core/testing';

import { CartManagerService } from './cartmanager.service';

describe('CartManagerService', () => {
  let service: CartManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
