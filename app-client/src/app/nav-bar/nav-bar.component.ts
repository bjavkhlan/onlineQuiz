import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  private loggedIn:boolean;
  constructor() {
    if(localStorage['token']) this.loggedIn = true;
    else this.loggedIn = false;
  }
  
  logout() {
    localStorage['token'] = undefined;
    this.loggedIn = false;
  }
  ngOnInit() {
  }

}
