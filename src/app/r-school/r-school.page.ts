import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-r-school',
  templateUrl: './r-school.page.html',
  styleUrls: ['./r-school.page.scss'],
})
export class RSchoolPage implements OnInit {

  constructor(private router: Router,private storage: Storage) { }

  ngOnInit() {
  }

  userData;
  toDashboard(){
     this.router.navigate(['rschool/dashboard'])
   }

   toPermissions(){
      this.router.navigate(['rschool/permissions'])
    }

    toSchoolList(){
      this.router.navigate(['rschool/school-list'])
    }

    toStudentList(){
      this.router.navigate(['rschool/student-list'])
    }

    toTeacherList(){
      this.router.navigate(['rschool/teacher-list'])
    }

    toCourseList(){
      this.router.navigate(['rschool/courses-list'])
    }

    logoutUser(){
      this.storage.remove('token')
      this.storage.remove('user')
      this.storage.remove('role')
     this.router.navigate(['/login'])

    }
}
