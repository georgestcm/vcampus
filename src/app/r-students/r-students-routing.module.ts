import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RStudentsPage } from './r-students.page';

const routes: Routes = [
  {
    path: '',
    component: RStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RStudentsPageRoutingModule {}
