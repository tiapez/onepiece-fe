import { TestBed } from '@angular/core/testing';

import { AllCardService } from './all-card.service';

describe('AllCardService', () => {
  let service: AllCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
