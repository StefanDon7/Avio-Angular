import { TestBed } from '@angular/core/testing';

import { AgentHomeService } from './agent-home.service';

describe('AgentHomeService', () => {
  let service: AgentHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
