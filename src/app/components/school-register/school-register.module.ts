import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolRegisterPageRoutingModule } from './school-register-routing.module';

import { SchoolRegisterPage } from './school-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolRegisterPageRoutingModule
  ],
  declarations: [SchoolRegisterPage]
})
export class SchoolRegisterPageModule {}
