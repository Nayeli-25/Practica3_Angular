import { TestBed } from '@angular/core/testing';

import { CheckEdadGuard } from './check-edad.guard';

describe('CheckEdadGuard', () => {
  let guard: CheckEdadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckEdadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
