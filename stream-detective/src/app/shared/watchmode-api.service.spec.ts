import { TestBed } from '@angular/core/testing';

import { WatchmodeApiService } from './watchmode-api.service';

describe('WatchmodeApiService', () => {
  let service: WatchmodeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchmodeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
