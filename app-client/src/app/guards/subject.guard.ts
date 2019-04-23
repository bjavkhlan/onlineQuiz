import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectGuard implements CanActivate {
  @select() userName: Observable<String>;
  private isLoggedIn = false;
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private stateStore: NgRedux<IAppState>, private dataService: DataService) {
    dataService.getUser();
    this.userName.subscribe(data => this.isLoggedIn = data ? true : false);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) return true;
    else return false;
  }
}
