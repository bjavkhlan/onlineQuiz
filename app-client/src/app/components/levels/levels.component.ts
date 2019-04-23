import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {DataService} from '../../data.service'
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { SET_LEVEL_NAME } from '../../actions';

@Component({
  selector: 'app-levels',
  templateUrl:'levels.component.html' ,
  
})
export class LevelsComponent implements OnInit {
  @select() subjectName;
  @select() levelName;
  subjectID:string;
  private subjectlevels=[] ;    

  constructor(private route: ActivatedRoute,private dataService: DataService,private ngRedux: NgRedux<IAppState>) {
 }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.subjectID = p['subjectid']; 
      this.dataService.get_levels(this.subjectID).subscribe((res:[])=>{        
        this.subjectlevels = res;        
    });    

    });
  }
  setLevelName(levname){
    this.ngRedux.dispatch({type: SET_LEVEL_NAME, todo:levname});
  }

}
