import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { AdminPage } from './admin/admin.page';
import {AdminPermissionPage} from './adminComponents/admin-permission/admin-permission.page';
import {SchoolListPage} from './components/school-list/school-list.page';
import {StudentListPage} from './components/student-list/student-list.page';
import {TeacherListPage} from './components/teacher-list/teacher-list.page';
import {CoursesListPage} from './components/courses-list/courses-list.page';
import {LoginPage} from './components/login/login.page';
import {REditorPage} from './r-editor/r-editor.page';
import {RSchoolPage} from './r-school/r-school.page';
import {RSchoolStaffPage} from './r-school-staff/r-school-staff.page';
import {RTeacherPage} from './r-teacher/r-teacher.page';
import {RStudentsPage} from './r-students/r-students.page';
import {AddCoursePage} from './r-teacher-components/add-course/add-course.page'
import {AboutPage} from './components/about/about.page';
import {ContactPage} from './components/contact/contact.page';
import {RegisterPage} from './components/register/register.page';
import {StudentPageCourseListPage} from './components/student-page-course-list/student-page-course-list.page';
import { TeacherGuard} from './teacher.guard';
import { AdminGuard } from './admin.guard';
import { EditorGuard} from './editor.guard';
import { SchoolGuard} from './school.guard';
import {StudentGuard} from './student.guard';
import {SchoolStaffGuard} from './schoolstaff.guard';
const routes: Routes = [
  { path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
  {
    path: 'login',
    component: LoginPage
  },
  {
    path:'admin',
    redirectTo:'admin/school-list',
    pathMatch:'full'
  },
  {
    path:'editor',
    redirectTo:'editor/school-list',
    pathMatch:'full'
  },
  {
    path:'rschool',
    redirectTo:'rschool/courses-list',
    pathMatch:'full'
  },
  {
    path:'rschoolstaff',
    redirectTo:'rschoolstaff/courses-list',
    pathMatch:'full'
  },
  {
    path:'rteacher',
    redirectTo:'rteacher/courses-list',
    pathMatch:'full'
  },
  {
    path:'rstudents',
    redirectTo:'rstudents/courses-list',
    pathMatch:'full'
  },
  {
    path: 'admin',
    component: AdminPage,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'school-list',
      component: SchoolListPage,
      pathMatch:"full"
      },
      {
        path: 'student-list',
        component: StudentListPage,
        pathMatch:"full"
      },
      {
        path: 'teacher-list',
        component: TeacherListPage,
        pathMatch:"full"
      },
      {
        path: 'courses-list',
        component: CoursesListPage,
        pathMatch:"full"
      },
      {
        path: 'permissions',
        component: AdminPermissionPage,
        pathMatch:"full"
      }
    ]
  },
  {
    path: 'editor',
    component:REditorPage,
    canActivate: [EditorGuard],
    children: [
      {
        path: 'school-list',
      component: SchoolListPage,
      pathMatch:"full"
      },
      {
        path: 'student-list',
        component: StudentListPage,
        pathMatch:"full"
      },
      {
        path: 'teacher-list',
        component: TeacherListPage,
        pathMatch:"full"
      },
      {
        path: 'courses-list',
        component: CoursesListPage,
        pathMatch:"full"
      },
      {
        path: 'permissions',
        component: AdminPermissionPage,
        pathMatch:"full"
      }
    ]
  },
  {
    path: 'rschool',
    component:RSchoolPage,
    canActivate: [SchoolGuard],
    children: [
      {
        path: 'student-list',
        component: StudentListPage,
        pathMatch:"full"
      },
      {
        path: 'teacher-list',
        component: TeacherListPage,
        pathMatch:"full"
      },
      {
        path: 'courses-list',
        component: CoursesListPage,
        pathMatch:"full"
      },
      {
        path: 'permissions',
        component: AdminPermissionPage,
        pathMatch:"full"
      }
    ]
  },
  {
    path: 'rschoolstaff',
    component:RSchoolStaffPage,
    canActivate: [SchoolStaffGuard],
    children: [
      {
        path: 'student-list',
        component: StudentListPage,
        pathMatch:"full"
      },
      {
        path: 'teacher-list',
        component: TeacherListPage,
        pathMatch:"full"
      },
      {
        path: 'courses-list',
        component: CoursesListPage,
        pathMatch:"full"
      },
      {
        path: 'permissions',
        component: AdminPermissionPage,
        pathMatch:"full"
      }
    ]
  },
  {
    path: 'rteacher',
  component: RTeacherPage,
  canActivate: [TeacherGuard],
  children: [
    {
      path:"courses-list/add-course",
      component:AddCoursePage
    },
    {
      path: 'courses-list',
      component: CoursesListPage
    },
    {
      path: 'permissions',
      component: AdminPermissionPage,
      pathMatch:"full"
    }
  ]

  },
  {
    path: 'rstudents',
  component:RStudentsPage,
  canActivate: [StudentGuard],
  children: [
    {
      path: 'courses-list',
      component: CoursesListPage,
      pathMatch:"full"
    }
  ]

  },
  {
    path: 'register',
    component: RegisterPage,
    pathMatch:"full",
    children: [
      {
        path: 'student-page-course-list',
        component: StudentPageCourseListPage,
        pathMatch:"full"
      }
    ]
  },
  {
    path: 'about',
    component: AboutPage,
    pathMatch:"full"
  },
  {
    path: 'contact',
    component: ContactPage,
    pathMatch:"full"
  },
  {
    path: 'add-staff',
    loadChildren: () => import('./components/add-staff/add-staff.module').then( m => m.AddStaffPageModule)
  },
  {
    path: 'school-register',
    loadChildren: () => import('./components/school-register/school-register.module').then( m => m.SchoolRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
