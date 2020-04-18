import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loginTesting ="https://vcampus.herokuapp.com/api/login"
private registerStudentUrl ="https://vcampus.herokuapp.com/api/register"
private _getRegisterSchool = "https://vcampus.herokuapp.com/api/register_school_login"
private  _saveSchoolData = "https://vcampus.herokuapp.com/api/save_school_data"
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

getRegisterSchool(schoolData){
  return this.http.post<any>(this._getRegisterSchool,schoolData)
}

saveSchoolData(schoolData){
  return this.http.post<any>(this._saveSchoolData,schoolData)
}
}
