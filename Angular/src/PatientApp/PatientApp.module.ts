import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { PatientComponent } from './PatientApp.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientAppModule { }
