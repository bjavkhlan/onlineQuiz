import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject',
  template: `
  <br>
  <button mat-button (click)="displaySubjectForm()">Create a new subject</button>
  <app-subject-form *ngIf="showSubjectForm" (subjectCreated)="getSubjects($event)"></app-subject-form>
  <mat-list role="list">
    <mat-list-item role="listitem" *ngFor="let subject of subjects">
      <mat-icon>label</mat-icon>  
      <span [routerLink]="subject._id"> {{subject.subjectName}} </span>
    </mat-list-item>
  </mat-list>
  `,
  styles: []
})
export class SubjectComponent implements OnInit {
  public subjects:any = [];
  public showSubjectForm:boolean = false;
  constructor(private dataService: DataService) { 
    this.getSubjects();
  }
  getSubjects(value:boolean = true) {
    this.dataService.get_subjects()
    .subscribe(data => { this.subjects = data; });
    this.showSubjectForm = false;
  }
  ngOnInit() {
  }
  displaySubjectForm() {
    this.showSubjectForm = true;
  }
}
