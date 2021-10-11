import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentRezervacijePageRoutingModule } from './agent-rezervacije-routing.module';

import { AgentRezervacijePage } from './agent-rezervacije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentRezervacijePageRoutingModule
  ],
  declarations: [AgentRezervacijePage]
})
export class AgentRezervacijePageModule {}
