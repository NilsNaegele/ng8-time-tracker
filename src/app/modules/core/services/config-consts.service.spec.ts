import { TestBed } from '@angular/core/testing';

import { ConfigConstsService } from './config-consts.service';

describe('ConfigConstsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigConstsService = TestBed.get(ConfigConstsService);
    expect(service).toBeTruthy();
  });
});
