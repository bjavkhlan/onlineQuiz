import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styles: []
})
export class SubjectFormComponent implements OnInit {
  @Output() subjectCreated = new EventEmitter<boolean>();
  public subjetForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private service: AdminService) { }

  ngOnInit() {
    this.subjetForm = this.formBuilder.group({
      'subjectName': ['', [Validators.required]]
    });
  }
  addSubject() {
    this.service.addSubject(this.subjetForm.get('subjectName').value)
    .subscribe(res => {
      console.log(res);
      this.subjectCreated.emit(true);
    }, err => {
      console.log(err);
      this.subjectCreated.emit(false);
    });
    
  }
}
