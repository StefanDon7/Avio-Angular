import { TestBed } from '@angular/core/testing';

import { AdminRegistracijaService } from './admin-registracija.service';

describe('AdminRegistracijaService', () => {
  let service: AdminRegistracijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRegistracijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
