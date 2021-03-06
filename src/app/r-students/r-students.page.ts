import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-r-students',
  templateUrl: './r-students.page.html',
  styleUrls: ['./r-students.page.scss'],
})
export class RStudentsPage implements OnInit {

  constructor(private router: Router,private storage: Storage) { }
 currentStudent
  ngOnInit() {
    this.storage.get('user').then((val)=>{
      this.currentStudent = val;
    })
  }

  userData;
  toDashboard(){
     this.router.navigate(['rstudents/dashboard'])
   }

   toPermissions(){
      this.router.navigate(['rstudents/permissions'])
    }

    toSchoolList(){
      this.router.navigate(['rstudents/school-list'])
    }

    toStudentList(){
      this.router.navigate(['rstudents/student-list'])
    }

    toTeacherList(){
      this.router.navigate(['rstudents/teacher-list'])
    }

    toCourseList(){
      this.router.navigate(['rstudents/courses-list'])
    }

    logoutUser(){
      this.storage.remove('token')
      this.storage.remove('user')
      this.storage.remove('role')
     this.router.navigate(['/login'])

    }
}
