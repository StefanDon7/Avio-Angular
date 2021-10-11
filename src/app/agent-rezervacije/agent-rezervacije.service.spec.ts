import { TestBed } from '@angular/core/testing';

import { AgentRezervacijeService } from './agent-rezervacije.service';

describe('AgentRezervacijeService', () => {
  let service: AgentRezervacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentRezervacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
