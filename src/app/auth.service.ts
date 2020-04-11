import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loginTesting ="https://vcampus.herokuapp.com/api/login"
private registerStudentUrl ="http://localhost:3000/api/register"
  constructor(private http: HttpClient, private _router:Router,private storage: Storage) { }


  getToken(){
    return this.storage.get('token')
  }

  loginUser(user){
   return this.http.post<any>(this.loginTesting,user)
  }

  registerStudent(studentData){
    return this.http.post<any>(this.registerStudentUrl,studentData)
  }

  loggedIn(){
    return this.storage.get('token').then((token)=>{
      if(token){
        return true
      } else {
        return false
      }
    })
  }

}
