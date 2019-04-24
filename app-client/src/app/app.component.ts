

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .rootcontainer {
      width: 1000px;
      margin: auto;
    }
  `]
})
export class AppComponent {
  title = 'Online Quizez';
  constructor(private serv: DataService){}
}