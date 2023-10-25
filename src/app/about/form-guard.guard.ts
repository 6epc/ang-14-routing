import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SaveData } from './save-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<SaveData> {
  canDeactivate(
    component: SaveData,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.warn('deactivation was triggered');

      return !component.isDataSaved() ? confirm("Вы точно готовы покинуть страницу ?") : true;
  }

}
