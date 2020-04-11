import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router,private storage: Storage) { }
     userName = {
       first_name:'',
       last_name:''
     }

  ngOnInit() {
    this.storage.get('user').then((val) => {
    this.userName.first_name = val.first_name;
    this.userName.last_name = val.last_name;
  })
  }

  userData;
  toDashboard(){
     this.router.navigate(['admin/dashboard'])
   }

   toPermissions(){
      this.router.navigate(['admin/permissions'])
    }

    toSchoolList(){
      this.router.navigate(['admin/school-list'])
    }

    toStudentList(){
      this.router.navigate(['admin/student-list'])
    }

    toTeacherList(){
      this.router.navigate(['admin/teacher-list'])
    }

    toCourseList(){
      this.router.navigate(['admin/courses-list'])
    }

    logoutUser(){
      this.storage.remove('token')
      this.storage.remove('user')
      this.storage.remove('role')
     this.router.navigate(['/login'])

    }
}
