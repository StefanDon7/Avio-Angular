import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KorisnikHomePage } from './korisnik-home.page';

describe('KorisnikHomePage', () => {
  let component: KorisnikHomePage;
  let fixture: ComponentFixture<KorisnikHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KorisnikHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
