import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.component.html',
  styleUrls: ['./admin.style.css']
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
