import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentLetPage } from './agent-let.page';

describe('AgentLetPage', () => {
  let component: AgentLetPage;
  let fixture: ComponentFixture<AgentLetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentLetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentLetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
