import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styles: []
})
export class LevelFormComponent {
  @Input() subjectId:String;
  @Output() levelAdded = new EventEmitter();
  private levelForm: FormGroup;
  private questions: FormArray;
  
  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { 
    this.levelForm = formBuilder.group({
      levelName: ['', [Validators.required]],
      questions: formBuilder.array([ this.createQuestion() ])
    });
  }

  createQuestion() {
    return this.formBuilder.group({
      question: ['', [Validators.required]],
      choices: this.formBuilder.array([['']]),
      answer: ['', [Validators.required]]
    })
  }

  addQuestion() {
    this.questions = this.levelForm.get('questions') as FormArray;
    this.questions.push(this.createQuestion());
  }

  addChoice(control) {
    control.push(this.formBuilder.control(''));
    return;
  }

  onSubmit() {
    this.adminService.addLevel(this.subjectId, this.levelForm.value)
    .subscribe(data => { console.log(data); this.levelAdded.emit() });
  }

}
