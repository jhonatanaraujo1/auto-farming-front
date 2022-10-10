import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/TokenStorageService';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private token: TokenStorageService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.token.getToken();

        if(token) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}