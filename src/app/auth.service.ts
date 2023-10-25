import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;

  constructor() { }

  login() {
    this.isAuth = true;
    console.log('Login: ', this.isAuth);
  }

  logout() {
    this.isAuth = false;
    console.log('Login: ', this.isAuth);
  }

  isAuthenticated(): Observable<boolean> {
    // we can return Promise<boolean> or Observeable<boolean> or boolean
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(this.isAuth);
    //   }, 1000);
    // })

    return of(this.isAuth).pipe(delay(500));
  }
}
