import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCurriculumPage } from './add-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: AddCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCurriculumPageRoutingModule {}
