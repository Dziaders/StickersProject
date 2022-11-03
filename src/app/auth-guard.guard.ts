import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  // canActivate(): boolean 
  // {
  //   return true;
  // }
 private user = !!localStorage.getItem("SesionUser");
  constructor(private Authguardservice: AuthGuardService, private router: Router){}
  canActivate(): boolean { 
    if(localStorage.getItem("SesionUser") == '0'){
      return false
      
    } 
    else{
      return true;
}}

gettoken(){
  console.log("SesionUser:", !!localStorage.getItem("SesionUser"))
  return !!localStorage.getItem("SesionUser");
  }  
}
