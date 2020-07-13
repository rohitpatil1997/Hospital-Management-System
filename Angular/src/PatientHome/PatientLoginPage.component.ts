import { Component } from '@angular/core';

import {User} from "./PatientLogin.Model";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './PatientLoginPage.component.html',
  
  
})
export class PatientLoginPageComponent {
  //userObj:User = new User();
  
  constructor(public http:HttpClient, public userObj:User, public routing: Router){

  }
  Login(){

    this.http.post("https://localhost:5001/api/Security", this.userObj).subscribe(res=>this.Success(res), res=>this.Error(res));
  }
Success(res){
  this.userObj.token = res.token;
  this.routing.navigate(["Home"])
//alert(res.token);

}
Error(res){

}

 
  
}
