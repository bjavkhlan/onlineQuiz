import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';
import { IAppState } from '../../store';
import { SET_SUBJECT_NAME } from '../../actions';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-subjects',
  templateUrl:'subjects.component.html',
  styleUrls: ['subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  @select() subjectName;
  public subjects  = [];     
  constructor(private dataService: DataService,private ngRedux: NgRedux<IAppState>) {
    this.dataService.get_subjects().subscribe((res:any [])=>{
      this.subjects = res;        
  });  
 }

  ngOnInit() {   
  } 
  setSubjectName(subname){
    this.ngRedux.dispatch({type: SET_SUBJECT_NAME, todo:subname});
  }

}


