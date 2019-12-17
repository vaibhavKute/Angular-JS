import { TestBed } from '@angular/core/testing';

import { ValdationService } from './valdation.service';

describe('ValdationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValdationService = TestBed.get(ValdationService);
    expect(service).toBeTruthy();
  });
});
