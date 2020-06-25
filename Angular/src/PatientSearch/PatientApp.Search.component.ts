import { Component } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { PatientModel } from '../PatientEdit/PatientApp.Model';


@Component({
 
  templateUrl: './PatientApp.Search.component.html'
  
})
export class PatientSearchComponent {
  title='PatientMangement';

  patientName:string = "";
  patientModels:Array<PatientModel> = new Array<PatientModel>();
  
  constructor( public http:HttpClient){
      
  }
  search(){
    this.http.get("https://localhost:5001/api/PatientAPI?patientName=" + this.patientName)
    .subscribe(res=>this.success(res), res=>this.error(res));
      

  }
  success(res)
  {
    this.patientModels = res;

  }
  error(res){
    

  }

 
  
}
