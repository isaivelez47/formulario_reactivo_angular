import { TestBed } from '@angular/core/testing';

import { FormStatusService } from './form-status.service';

describe('FormStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormStatusService = TestBed.get(FormStatusService);
    expect(service).toBeTruthy();
  });
});
