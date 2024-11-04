import { TestBed } from '@angular/core/testing';

import { DatacheckService } from './datacheck.service';

describe('DatacheckService', () => {
  let service: DatacheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
