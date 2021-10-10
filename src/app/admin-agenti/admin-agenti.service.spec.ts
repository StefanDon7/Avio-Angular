import { TestBed } from '@angular/core/testing';

import { AdminAgentiService } from './admin-agenti.service';

describe('AdminAgentiService', () => {
  let service: AdminAgentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAgentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
