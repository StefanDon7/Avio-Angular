import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KorisnikHomePageRoutingModule } from './korisnik-home-routing.module';

import { KorisnikHomePage } from './korisnik-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KorisnikHomePageRoutingModule
  ],
  declarations: [KorisnikHomePage]
})
export class KorisnikHomePageModule {}
