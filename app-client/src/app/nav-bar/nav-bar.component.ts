import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  private loggedIn:boolean;
  constructor() {
    if(localStorage.getItem('token')) this.loggedIn = true;
    else this.loggedIn = false;
  }
  
  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }
  ngOnInit() {
  }

}
