import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-register',
  templateUrl: './school-register.page.html',
  styleUrls: ['./school-register.page.scss'],
})
export class SchoolRegisterPage implements OnInit {

  constructor() { }
  current_page_on_off = true;
  login_user = {
    username:'',
    password:'',
    role_request:3
  }
  error;
  save_school_data = {
    school_name:'',
    principal_first_name:'',
    principal_last_name:'',
    password:'',
    description:''
  }
  re_password='';
  ngOnInit() {
  }


 login(){
   console.log(this.login_user)
 }

 saveNewUser(){
   if(this.save_school_data.school_name.length ===0){
     this.error = "Please enter a school name"
   } else{
     this.save_school_data.school_name.trim()
     if(this.save_school_data.principal_first_name.length===0){
       this.error = "Please enter the principals first name"
     } else {
       this.save_school_data.principal_first_name.trim()
       if(this.save_school_data.principal_last_name.length===0){
         this.error = " Please enter the principals last name"
       } else {
         this.save_school_data.principal_last_name.trim()
         if(this.save_school_data.password.length===0){
           this.error = "Please enter a password"
         } else {
           this.save_school_data.password.trim()
           if(this.re_password.length===0){
             this.error = "Re enter your password"
           } else {
             this.re_password.trim()
             if(this.re_password!==this.save_school_data.password){
               this.error = "Your password do not match"
             } else {
               if(this.save_school_data.description.length===0){
                 this.error = "Please enter a description"
               } else {
                 this.error = ''
                 this.save_school_data.description.trim()
                 console.log(this.save_school_data)
               }
             }
           }
         }
       }
     }
   }
 }
}
