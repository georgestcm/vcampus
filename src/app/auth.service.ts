import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loginTesting ="http://localhost:3000/api/login"
  constructor(private http: HttpClient, private _router:Router,private storage: Storage) { }


  getToken(){
    return this.storage.get('token')
  }

  loginUser(user){
   return this.http.post<any>(this.loginTesting,user)
  }

  loggedIn(){
    //return this.storage.get('token')
    //console.log(!!this.storage.get('token'))
    return this.storage.get('token').then((token)=>{
      if(token){
        return true
      } else {
        return false//change to false
      }
    })
  }


}
