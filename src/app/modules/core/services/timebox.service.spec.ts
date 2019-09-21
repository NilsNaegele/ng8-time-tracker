import { TestBed } from '@angular/core/testing';

import { TimeboxService } from './timebox.service';

describe('TimeboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeboxService = TestBed.get(TimeboxService);
    expect(service).toBeTruthy();
  });
});
