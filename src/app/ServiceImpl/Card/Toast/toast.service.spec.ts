import { TestBed } from '@angular/core/testing';

import { ToastServiceImpl } from './toast.service';

describe('ToastService', () => {
  let service: ToastServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
