import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alertController: AlertController) { }

    studentRegistration = {
      first_name:"",
      last_name:"",
      username:"",
      email:"",
      password:"",
      roles:[5]
    }

    password = {
      reEnter:""
    }
  ngOnInit() {
  }

 logData(){
   console.log(this.studentRegistration)
 }

 async presentAlert(msg) {
     const alert = await this.alertController.create({
       message: msg
     });

     await alert.present();
   }

 register(){
   if(this.studentRegistration.first_name.length === 0){
     this.presentAlert("Enter your first name to continue")
   } else if(this.studentRegistration.last_name.length === 0){
     this.presentAlert("Enter your last name to continue")
   } else if(this.studentRegistration.username.length === 0){
     this.presentAlert("Enter a username to continue")
   } else if(this.studentRegistration.email.length === 0){
     this.presentAlert("Enter a email to continue")
   } else if(!this.studentRegistration.email.includes("@")){
     this.presentAlert("Enter a valid email to continue")
   } else if(this.studentRegistration.password.length < 5){
     this.presentAlert("Enter a password that has more then 5 characters to continue")
   } else if(this.password.reEnter.length < 5) {
      this.presentAlert("Re-enter your password.They do not match")
   } else if(Object.is(this.password.reEnter, this.studentRegistration.password)) {
        //send to the server
        console.log(this.studentRegistration)
   } else {
     this.presentAlert("Re-enter your password.They do not match")
   }

 }
}
