import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPageCourseListPage } from './student-page-course-list.page';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageCourseListPageRoutingModule {}
