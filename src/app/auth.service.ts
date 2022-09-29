import { Injectable } from '@angular/core';

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

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    })
  }
}
