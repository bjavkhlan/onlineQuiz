import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  @select() isAdmin: Observable<boolean>;
  private isUserAdmin = false;
  constructor(private stateStore: NgRedux<IAppState>) {
    this.isAdmin.subscribe(data => this.isUserAdmin = data);
  }
  path: ActivatedRouteSnapshot[];  
  route: ActivatedRouteSnapshot;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.isUserAdmin) return true;
    else return false;
  }
}
