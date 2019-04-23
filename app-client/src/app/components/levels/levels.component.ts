import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {DataService} from '../../data.service'
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { SET_LEVEL_NAME } from '../../actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-levels',
  templateUrl:'levels.component.html' ,
  styleUrls:['levels.component.css']
  
})
export class LevelsComponent implements OnInit {
  @select() subjectName;
  @select() levelName;
  @select() levels: Observable<any>;
  subjectID:string;
  private subjectlevels=[] ;    

  constructor(private route: ActivatedRoute,private dataService: DataService,private ngRedux: NgRedux<IAppState>) {
 }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.subjectID = p['subjectid']; 
      this.levels.subscribe(data => this.subjectlevels = data);      
    });
  }
  setLevelName(levname){
    this.ngRedux.dispatch({type: SET_LEVEL_NAME, todo:levname});
  }

}
