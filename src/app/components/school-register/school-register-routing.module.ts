import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolRegisterPage } from './school-register.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRegisterPageRoutingModule {}
