import { TestBed } from '@angular/core/testing';

import { StudenthttpServiceService } from './studenthttp-service.service';

describe('StudenthttpServiceService', () => {
  let service: StudenthttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenthttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
