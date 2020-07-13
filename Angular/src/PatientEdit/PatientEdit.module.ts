
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PatientComponent } from './PatientApp.component';




import { from } from 'rxjs';
import { PatientEditRoutes } from './PatientEditRouting';
import { CommonModule } from '@angular/common';
import { MyJWTInterceptor } from 'src/Utilities/Utility.Interceptor';


@NgModule({
  declarations: [
    PatientComponent
    
  ],
  imports: [
    RouterModule.forChild(PatientEditRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

    {provide: HTTP_INTERCEPTORS, useClass: MyJWTInterceptor , multi:true}
  ],
  bootstrap: [PatientComponent]
})
export class PatientHomeModule { }
