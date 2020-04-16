import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSchoolStaffPageRoutingModule } from './add-school-staff-routing.module';

import { AddSchoolStaffPage } from './add-school-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSchoolStaffPageRoutingModule
  ],
  declarations: [AddSchoolStaffPage]
})
export class AddSchoolStaffPageModule {}
