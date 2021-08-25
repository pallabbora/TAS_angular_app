import { TestBed } from '@angular/core/testing';

import { AppraisalserviceService } from './appraisalservice.service';

describe('AppraisalserviceService', () => {
  let service: AppraisalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppraisalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
