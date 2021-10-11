import { TestBed } from '@angular/core/testing';

import { AgentLetService } from './agent-let.service';

describe('AgentLetService', () => {
  let service: AgentLetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentLetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
