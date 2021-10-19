import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authS: AuthService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    

      return this.authS.verifcaAuth()
              .pipe(
                tap(estaAuth=> {
                  if(!estaAuth){
                    this.router.navigate(['./auth/login']);
                  }
                })
              );

    
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

      return this.authS.verifcaAuth()
      .pipe(
        tap(estaAuth=> {
          if(!estaAuth){
            this.router.navigate(['./auth/login']);
          }
        })
      );

    }
}
