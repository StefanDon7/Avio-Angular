import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RezervacijaPage } from './rezervacija.page';

const routes: Routes = [
  {
    path: '',
    component: RezervacijaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RezervacijaPageRoutingModule {}
