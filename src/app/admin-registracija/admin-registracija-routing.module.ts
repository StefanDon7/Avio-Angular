import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRegistracijaPage } from './admin-registracija.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRegistracijaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRegistracijaPageRoutingModule {}
