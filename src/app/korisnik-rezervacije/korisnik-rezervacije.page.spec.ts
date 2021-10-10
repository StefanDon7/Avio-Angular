import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KorisnikRezervacijePage } from './korisnik-rezervacije.page';

describe('KorisnikRezervacijePage', () => {
  let component: KorisnikRezervacijePage;
  let fixture: ComponentFixture<KorisnikRezervacijePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikRezervacijePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KorisnikRezervacijePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
