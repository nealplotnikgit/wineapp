import { TestBed } from '@angular/core/testing';

import { WinesearchService } from './winesearch.service';

describe('WinesearhcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinesearchService = TestBed.get(WinesearchService);
    expect(service).toBeTruthy();
  });
});
