import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KorisnikRezervacijePage } from './korisnik-rezervacije.page';

const routes: Routes = [
  {
    path: '',
    component: KorisnikRezervacijePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KorisnikRezervacijePageRoutingModule {}
