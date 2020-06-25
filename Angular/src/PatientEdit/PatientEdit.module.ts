
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { PatientComponent } from './PatientApp.component';




import { from } from 'rxjs';
import { PatientEditRoutes } from './PatientEditRouting';
import { CommonModule } from '@angular/common';


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
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientHomeModule { }
