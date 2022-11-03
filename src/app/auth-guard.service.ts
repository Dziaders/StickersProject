import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() {  
  }  
  gettoken(){  
     return !!localStorage.getItem("SesionUser");  
     }  
   
}
