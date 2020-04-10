import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RSchoolStaffPageRoutingModule } from './r-school-staff-routing.module';

import { RSchoolStaffPage } from './r-school-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RSchoolStaffPageRoutingModule
  ],
  declarations: [RSchoolStaffPage]
})
export class RSchoolStaffPageModule {}
