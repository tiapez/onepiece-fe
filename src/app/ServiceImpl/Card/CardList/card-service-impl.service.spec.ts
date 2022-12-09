import { TestBed } from '@angular/core/testing';

import { CardServiceImplService } from './card-service-impl.service';

describe('CardServiceImplService', () => {
  let service: CardServiceImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardServiceImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
