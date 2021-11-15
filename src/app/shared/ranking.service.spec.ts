import { TestBed } from '@angular/core/testing';

import { RankingService } from './ranking.service';

describe('RakingService', () => {
  let service: RankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
