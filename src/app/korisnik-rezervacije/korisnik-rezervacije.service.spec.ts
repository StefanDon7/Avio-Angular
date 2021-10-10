import { TestBed } from '@angular/core/testing';

import { KorisnikRezervacijeService } from './korisnik-rezervacije.service';

describe('KorisnikRezervacijeService', () => {
  let service: KorisnikRezervacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorisnikRezervacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
