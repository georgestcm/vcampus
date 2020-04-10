import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RTeacherPageRoutingModule } from './r-teacher-routing.module';

import { RTeacherPage } from './r-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RTeacherPageRoutingModule
  ],
  declarations: [RTeacherPage]
})
export class RTeacherPageModule {}
