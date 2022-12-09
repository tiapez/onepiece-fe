import { TestBed } from '@angular/core/testing';

import { CardActionServiceImpl } from './card-action.service';

describe('CardActionService', () => {
  let service: CardActionServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardActionServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
