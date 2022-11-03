import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {

  canActivate(): boolean { 
    if(localStorage.getItem("SesionUser") == '0'){
      return false
    }
    else{
      return true;
    }
  }
}
