import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';


import { HomePageComponent } from './PatientHomePage.component';
import { MasterPageComponent } from './PatientMasterPage.component';
import { PatientRoutes } from './PatientRouting';

import { from } from 'rxjs';


@NgModule({
  declarations: [
   
    MasterPageComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(PatientRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class PatientHomeModule { }
