import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { PatientComponent } from './PatientApp.component';
import { HomePageComponent } from './PatientHomePage.component';
import { MasterPageComponent } from './PatientMasterPage.component';
import { PatientRoutes } from '../Routing/PatientRouting';

import { from } from 'rxjs';
import { PatientSearchComponent } from './PatientApp.Search.component';

@NgModule({
  declarations: [
    PatientComponent,
    MasterPageComponent,
    HomePageComponent,
    PatientSearchComponent
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
export class PatientAppModule { }
