import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageCourseListPageRoutingModule } from './student-page-course-list-routing.module';

import { StudentPageCourseListPage } from './student-page-course-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageCourseListPageRoutingModule
  ],
  declarations: []
})
export class StudentPageCourseListPageModule {}
