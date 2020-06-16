import { Component } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import {PatientModel} from './PatientApp.Model';

@Component({
  selector: 'app-root',
  templateUrl: './PatientApp.component.html',
  
})
export class PatientComponent {
  title='PatientMangement';

  patientObj:PatientModel=null;
 patientObjs:Array<PatientModel> = new Array<PatientModel>();
  constructor(public Http:HttpClient){
    this.patientObj=new PatientModel();
  }
 


  Submit(){
   /*  let patientObj={
      name:this.patientObj.name,
      problemDescription:this.patientObj.problemDescription
    } */

    this.Http.post("https://localhost:5001/Patient/Submit", this.patientObj)
    .subscribe( 
      res=>this.Success(res),
      res=>this.Error(res)
    );
    /* alert(this.patientObj.name + this.pati,e;ntObj.problemDescription);
 */
  }
    Success(res){
      
      this.patientObjs = res; // set the Collection
      this.patientObj = new PatientModel();

    }
    Error(res){
      alert(res);

    }
 
  
}
