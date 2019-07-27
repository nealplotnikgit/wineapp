import { TestBed } from '@angular/core/testing';

import { WinesearchService } from './winesearch.service';
import { HttpClientModule } from '@angular/common/http';

describe('WinesearchService', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        declarations: [
        ],
      }).compileComponents();
    });

  it('should be created', () => {
    const service: WinesearchService = TestBed.get(WinesearchService);
    expect(service).toBeTruthy();
  });
});
