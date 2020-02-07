import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { AdminPage } from './admin/admin.page';
import { AdminDashboardPage } from './admin-dashboard/admin-dashboard.page';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    component: AdminPage,
    children: [
      { path: 'dashboard', component: AdminDashboardPage,pathMatch:"full" },
      {
        path: 'permissions',
        loadChildren: () => import('./components/permissions/permissions.module').then( m => m.PermissionsPageModule)
      }
    ]
  },
  {
    path:"admin",
    redirectTo:'dashboard'
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
    //route works as intended
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then( m => m.AboutPageModule)
    //route works as intended
  },
  {
    path: 'schools',
    loadChildren: () => import('./schools/schools.module').then( m => m.SchoolsPageModule)
    //route works as intended
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then( m => m.ContactPageModule)
    //route works as intended
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
    //route works as intended
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
