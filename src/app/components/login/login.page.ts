import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { LanguageSelectPage} from 'src/app/components/language-select/language-select.page';
import { Storage } from '@ionic/storage';
import {AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loadingController: LoadingController,
  private router: Router,
public translate: TranslateService,
public popoverController: PopoverController,
private storage: Storage,
public alertController: AlertController,
private _auth: AuthService) { }

 franceFlag = '/assets/icon/fr.png'
 englishFlag = '/assets/icon/en.png'
 flag;
 currentLang;
 roleRequestNumber;
 role;
 login_user_data = {
   username:'',
   password:'',
   role_request: null
 }
 user;
  ngOnInit() {
    this.storage.get('language').then((val) => {
      if(val === 'en'){
        this.flag = '/assets/icon/en.png'
      } else if (val === 'fr') {
        this.flag = '/assets/icon/fr.png'
      }
  });
  }



  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'loging in',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentAlert(msg) {
      const alert = await this.alertController.create({
        message: msg

      });

      await alert.present();
    }

  toAbout(){
      this.router.navigate(['/about'])
    }

    toSchools(){
        this.router.navigate(['/schools'])
      }

      toContact(){
      this.router.navigate(['/contact'])
    }


 toRegister(){
   this.router.navigate(['/register'])
 }

    async presentPopover(ev: any) {
       const popover = await this.popoverController.create({
         component: LanguageSelectPage,
         event: ev,
         translucent: false
       });
       return await popover.present();
     }

getRoleRequest(e){
  this.role = e.detail.value
  if(Object.is(e.detail.value,"Admin")){
    this.login_user_data.role_request = 1
  } else if(Object.is(e.detail.value,"Editor")){
    this.login_user_data.role_request = 2
  } else if(Object.is(e.detail.value,"School")){
    this.login_user_data.role_request = 3
  } else if(Object.is(e.detail.value,"Teacher")){
    this.login_user_data.role_request = 4
  } else if(Object.is(e.detail.value,"Student")){
    this.login_user_data.role_request = 5
  }
}

 login(){
   if(this.login_user_data.username.length===0){
     this.presentAlert("Enter a username")
   } else if(this.login_user_data.password.length===0){
     this.presentAlert("Enter a password")
   } else if(this.login_user_data.role_request.length === 0){
     this.presentAlert("Please a role you would like to log in as.")
   } else {
     this.loaderToShow = this.loadingController.create({
       message: 'Loading'
     }).then((res) => {
       res.present();
       this._auth.loginUser(this.login_user_data)
       .subscribe(
         res =>(
           console.log(res),
          this.user = res.user,
         console.log(JSON.stringify(res.user)),
         this.storage.set('user',res.user),
         this.storage.set('token',res.token),
         this.storage.set('role',res.role),
         this.hideLoader(),
          this.router.navigate(['admin/dashboard']),
           this.login_user_data.username = '',
           this.login_user_data.password = ''
         ),
         err =>(this.presentAlert("login","err.error"),
       this.hideLoader())
       )
     });
   }

console.log(this.login_user_data)
 }



 hideLoader() {
  this.loadingController.dismiss();
}
}
