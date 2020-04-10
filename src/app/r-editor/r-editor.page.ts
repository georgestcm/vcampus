import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-r-editor',
  templateUrl: './r-editor.page.html',
  styleUrls: ['./r-editor.page.scss'],
})
export class REditorPage implements OnInit {

  constructor(private router: Router,private storage: Storage) { }

  ngOnInit() {
  }

  userData;
  toDashboard(){
     this.router.navigate(['editor/dashboard'])
   }

   toPermissions(){
      this.router.navigate(['editor/permissions'])
    }

    toSchoolList(){
      this.router.navigate(['editor/school-list'])
    }

    toStudentList(){
      this.router.navigate(['editor/student-list'])
    }

    toTeacherList(){
      this.router.navigate(['editor/teacher-list'])
    }

    toCourseList(){
      this.router.navigate(['editor/courses-list'])
    }

    logoutUser(){
      this.storage.remove('token')
      this.storage.remove('user')
      this.storage.remove('role')
     this.router.navigate(['/login'])

    }
}
