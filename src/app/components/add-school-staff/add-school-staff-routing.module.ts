import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSchoolStaffPage } from './add-school-staff.page';

const routes: Routes = [
  {
    path: '',
    component: AddSchoolStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSchoolStaffPageRoutingModule {}
