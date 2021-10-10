import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAgentiPageRoutingModule } from './admin-agenti-routing.module';

import { AdminAgentiPage } from './admin-agenti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAgentiPageRoutingModule
  ],
  declarations: [AdminAgentiPage]
})
export class AdminAgentiPageModule {}
