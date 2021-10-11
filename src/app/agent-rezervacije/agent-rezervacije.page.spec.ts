import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentRezervacijePage } from './agent-rezervacije.page';

describe('AgentRezervacijePage', () => {
  let component: AgentRezervacijePage;
  let fixture: ComponentFixture<AgentRezervacijePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRezervacijePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentRezervacijePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
