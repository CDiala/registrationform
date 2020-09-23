import { TestBed } from '@angular/core/testing';

import { LgaService } from './lga.service';

describe('LgaService', () => {
  let service: LgaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
