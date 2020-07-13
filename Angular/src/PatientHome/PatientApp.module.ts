import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { HomePageComponent } from './PatientHomePage.component';
import { MasterPageComponent } from './PatientMasterPage.component';
import { PatientRoutes } from './PatientRouting';


import { PatientLoginPageComponent } from './PatientLoginPage.component';
import { User } from './PatientLogin.Model';
import { SecurityLogic } from 'src/Utilities/Utility.AuthGuard';
import { MyJWTInterceptor } from 'src/Utilities/Utility.Interceptor';


@NgModule({
  declarations: [
   
    MasterPageComponent,
    HomePageComponent,
    PatientLoginPageComponent
  ],
  imports: [
    RouterModule.forRoot(PatientRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [User, SecurityLogic,  {provide: HTTP_INTERCEPTORS, useClass: MyJWTInterceptor, multi:true}
 ],
  bootstrap: [MasterPageComponent]
})
export class PatientHomeModule { }
