//Code Check 



import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User  } from "../PatientHome/PatientLogin.Model";

@Injectable()
 
export class SecurityLogic implements CanActivate{
    constructor(private _router:Router, public _user:User){

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        if (this._user.token.length !=0) {
            return true; //navigation allowed
            
        }
        this._router.navigate(['/Login']);
        return false;
    }
}