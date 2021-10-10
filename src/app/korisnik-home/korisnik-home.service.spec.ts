import { TestBed } from '@angular/core/testing';

import { KorisnikHomeService } from './korisnik-home.service';

describe('KorisnikHomeService', () => {
  let service: KorisnikHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorisnikHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
