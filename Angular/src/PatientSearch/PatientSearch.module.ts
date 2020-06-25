
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { PatientSearchComponent } from './PatientApp.Search.component';
import { PatientSearchRoutes } from './PatientSearchRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
   
    PatientSearchComponent
  ],
  imports: [
    RouterModule.forChild(PatientSearchRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PatientSearchComponent]
})
export class PatientSearchModule { }
