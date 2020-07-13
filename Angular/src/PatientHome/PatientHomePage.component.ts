import { Component } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';


@Component({
 selector:'app-root',
  templateUrl: './PatientHomePage.component.html'
  
})
export class HomePageComponent {
  title='PatientMangement';
  patientName:string="";
 
  
}
