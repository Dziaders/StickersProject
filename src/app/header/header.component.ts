import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    console.log("USERSTAUSUS:");
    return;
  }

  checkLogin(){

    let status = localStorage.getItem("SesionUser");
    if(status =='0'){
      $('#GSCCModal').modal('show');
    }
    else{
      console.log('access gained');
    }
  }

}
