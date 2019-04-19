

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Online Quizez</h1>
  <a [routerLink]="['/']">Home</a> | 
  <a [routerLink]="['subjects']">Subjects</a>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Quizez';
}