import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RSchoolPage } from './r-school.page';

const routes: Routes = [
  {
    path: '',
    component: RSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RSchoolPageRoutingModule {}
