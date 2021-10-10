import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KorisnikHomePage } from './korisnik-home.page';

const routes: Routes = [
  {
    path: '',
    component: KorisnikHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KorisnikHomePageRoutingModule {}
