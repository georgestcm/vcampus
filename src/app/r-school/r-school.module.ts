import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RSchoolPageRoutingModule } from './r-school-routing.module';

import { RSchoolPage } from './r-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RSchoolPageRoutingModule
  ],
  declarations: [RSchoolPage]
})
export class RSchoolPageModule {}
