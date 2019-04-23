import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IAppState } from '../store';
import { USER_LOGOUT } from '../actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  @select() userName: Observable<String>;
  @select() isAdmin: Observable<boolean>;
  private name: string;
  private admin: boolean;
  private loggedIn:boolean;
  constructor(private userStore: NgRedux<IAppState>) {
    if(localStorage.getItem('token')) this.loggedIn = true;
    else this.loggedIn = false;

    this.userName.subscribe( name => this.displayName(name));
    this.isAdmin.subscribe( bool => this.admin = bool);
  }
  displayName(name) {
    this.name = name;
    if (name) this.loggedIn = true;
    else this.loggedIn = false;
  }
  logout() {
    this.userStore.dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('token');
    this.loggedIn = false;
  }
  ngOnInit() {
  }

}
