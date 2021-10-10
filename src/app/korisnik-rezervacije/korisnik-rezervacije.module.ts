import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KorisnikRezervacijePageRoutingModule } from './korisnik-rezervacije-routing.module';

import { KorisnikRezervacijePage } from './korisnik-rezervacije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KorisnikRezervacijePageRoutingModule
  ],
  declarations: [KorisnikRezervacijePage]
})
export class KorisnikRezervacijePageModule {}
