import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {DataService} from '../../data.service'

@Component({
  selector: 'app-levels',
  templateUrl:'levels.component.html' ,
  
})
export class LevelsComponent implements OnInit {
  subjectID:string;
  private subjectlevels=[] ;    

  constructor(private route: ActivatedRoute,private dataService: DataService) {
 }



  ngOnInit() {

    this.route.params.subscribe(p => {
      this.subjectID = p['subjectid']; 
      this.dataService.get_levels(this.subjectID).subscribe((res:[])=>{        
        this.subjectlevels = res;   
    });    

    });
  }

}
