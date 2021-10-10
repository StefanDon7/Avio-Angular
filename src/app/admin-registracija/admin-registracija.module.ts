import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRegistracijaPageRoutingModule } from './admin-registracija-routing.module';

import { AdminRegistracijaPage } from './admin-registracija.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRegistracijaPageRoutingModule
  ],
  declarations: [AdminRegistracijaPage]
})
export class AdminRegistracijaPageModule {}
