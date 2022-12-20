import { TestBed } from '@angular/core/testing';

import { DeckImplService } from './deck-impl.service';

describe('DeckImplService', () => {
  let service: DeckImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
