import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.page.html',
  styleUrls: ['./add-staff.page.scss'],
})
export class AddStaffPage implements OnInit {

  constructor(public _auth: AuthService) { }

  ngOnInit() {
  }
password;
username='';
first_name='';
last_name='';
user_staff_info;
error;
 loginfo(){

   this.password = this.last_name+"admin";
   this.user_staff_info = {
     username:this.username,
     first_name:this.first_name,
     last_name:this.last_name,
     password: this.password,
     roles:2
   }

if(this.username.toString().length===0){
  this.error="Please enter a username"
} else if(this.first_name.length===0){
  this.error="Please enter a first name"
} else if(this.last_name.length===0){
  this.error="Please enter a last name"
} else {
  this._auth.registerStudent(this.user_staff_info)
  .subscribe (
    res=> (
   this.user_staff_info.first_name = ' ',
     this.user_staff_info.last_name = ' ',
     this.user_staff_info.username=' ',
     this.first_name = ' ',
       this.last_name = ' ',
       this.username=' ',
     this.error = "A new editor has been added"
    ),
    err=> (
      console.log(err),
      this.error = err.error
    )
  )
}

 }
}
