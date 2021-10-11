import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentLetPageRoutingModule } from './agent-let-routing.module';

import { AgentLetPage } from './agent-let.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentLetPageRoutingModule
  ],
  declarations: [AgentLetPage]
})
export class AgentLetPageModule {}
