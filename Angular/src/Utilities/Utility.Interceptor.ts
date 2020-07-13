import { HttpInterceptor, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/PatientHome/PatientLogin.Model';

@Injectable()
export class MyJWTInterceptor implements HttpInterceptor {
    constructor(private user: User){}
       intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
           request = request.clone({
               setHeaders: {
                   Authorization: 'Bearer ${this.user.token}'
               }
           });
           return next.handle(request);
       
    }
}