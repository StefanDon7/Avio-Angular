import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAgentiPage } from './admin-agenti.page';

describe('AdminAgentiPage', () => {
  let component: AdminAgentiPage;
  let fixture: ComponentFixture<AdminAgentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgentiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAgentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
