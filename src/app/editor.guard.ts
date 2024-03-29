import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements  CanActivate {

  constructor(private _authService: AuthService, private _router:Router,private storage: Storage){

  }

  async canActivate(): Promise<boolean> {
      if(await this._authService.loggedIn()){
        //return true
        return this.storage.get('role').then((role)=>{
          if(role===2){
            return true
          } else {
            return false
          }
        })
      } else {
        this._router.navigate(['/login'])
        return false
      };
    };

}
