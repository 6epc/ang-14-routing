import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from 'src/app/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AboutLoadGuard implements CanLoad {

  constructor(
    private AuthService: AuthService,
    private router: Router
    ) { }

  canLoad(): Observable<boolean | UrlTree> {
    return this.AuthService.isAuthenticated().pipe(
      map(v => v || this.router.createUrlTree(['/'], {queryParams: { auth: false }}))
    );
  }
}
