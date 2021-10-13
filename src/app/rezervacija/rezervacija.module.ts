import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RezervacijaPageRoutingModule } from './rezervacija-routing.module';

import { RezervacijaPage } from './rezervacija.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RezervacijaPageRoutingModule
  ],
  declarations: [RezervacijaPage]
})
export class RezervacijaPageModule {}
