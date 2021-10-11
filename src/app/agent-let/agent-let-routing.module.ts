import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentLetPage } from './agent-let.page';

const routes: Routes = [
  {
    path: '',
    component: AgentLetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentLetPageRoutingModule {}
