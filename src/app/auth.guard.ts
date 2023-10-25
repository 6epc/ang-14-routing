import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    public AuthService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean {

    return this.AuthService.isAuthenticated().pipe(
      map(v => v || this.router.createUrlTree(['/'], {queryParams: { auth: false }}))
    )
    // just example of returning promise<boolean> type
    // return this.AuthService.isAuthenticated().then((isAuth): any => {
    //   if (isAuth) {
    //     return true
    //   } else {
    //     this.router.navigate(['/'], {
    //       queryParams: { auth: false }
    //     });
    //   }
    // });
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}
