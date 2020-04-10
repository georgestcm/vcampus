import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RStudentsPageRoutingModule } from './r-students-routing.module';

import { RStudentsPage } from './r-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RStudentsPageRoutingModule
  ],
  declarations: [RStudentsPage]
})
export class RStudentsPageModule {}
