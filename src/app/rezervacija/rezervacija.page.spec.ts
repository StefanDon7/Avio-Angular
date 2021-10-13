import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RezervacijaPage } from './rezervacija.page';

describe('RezervacijaPage', () => {
  let component: RezervacijaPage;
  let fixture: ComponentFixture<RezervacijaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervacijaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RezervacijaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
