import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RTeacherPage } from './r-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: RTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RTeacherPageRoutingModule {}
