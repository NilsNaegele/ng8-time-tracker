import { TestBed } from '@angular/core/testing';

import { ElapsedTimeService } from './elapsed-time.service';

describe('ElapsedTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElapsedTimeService = TestBed.get(ElapsedTimeService);
    expect(service).toBeTruthy();
  });
});
