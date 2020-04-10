import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RSchoolStaffPage } from './r-school-staff.page';

const routes: Routes = [
  {
    path: '',
    component: RSchoolStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RSchoolStaffPageRoutingModule {}
