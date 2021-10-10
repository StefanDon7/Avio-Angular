import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAgentiPage } from './admin-agenti.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAgentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAgentiPageRoutingModule {}
