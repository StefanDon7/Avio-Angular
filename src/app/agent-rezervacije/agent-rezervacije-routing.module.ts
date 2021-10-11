import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentRezervacijePage } from './agent-rezervacije.page';

const routes: Routes = [
  {
    path: '',
    component: AgentRezervacijePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRezervacijePageRoutingModule {}
