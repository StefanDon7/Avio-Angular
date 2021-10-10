import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminRegistracijaPage } from './admin-registracija.page';

describe('AdminRegistracijaPage', () => {
  let component: AdminRegistracijaPage;
  let fixture: ComponentFixture<AdminRegistracijaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegistracijaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRegistracijaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
