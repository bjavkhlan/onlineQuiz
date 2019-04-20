import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  template:`
  <div>
  Subjects:
  <ul>
    <li *ngFor="let subject of listSubjects">
      <a [routerLink]="[subject.subjectid]">{{subject.name}}</a>
    </li>
  </ul>
 </div>
  `  
})
export class SubjectsComponent implements OnInit {
  listSubjects:[{subjectid:1,name:'GRE'},
                {subjectid:2,name:'NodeJs'},
                {subjectid:3,name:'MongoDB'},
                {subjectid:4,name:'Angular'}
               ];
  constructor() { }

  ngOnInit() {
  }

}
