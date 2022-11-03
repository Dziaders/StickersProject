import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userNotLogged='0'
  userLogged='1'
  isUserLogged = "0"

  ngOnInit(): void {
    localStorage.setItem("SesionUser", this.userNotLogged);
    console.log("localstorage:",localStorage.getItem("SesionUser"));
  }

  onLogin(){
    localStorage.setItem("SesionUser", this.userLogged);
    console.log("localstorage:",localStorage.getItem("SesionUser"));
    this.isUserLogged = '1';
  }

  checkLogin(){
    console.log("LOGIN CHECK LOGIN:", this.isUserLogged)
    return this.isUserLogged;
  }
}
