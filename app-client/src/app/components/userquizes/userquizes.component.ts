import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {DataService} from '../../data.service'
import { select } from '@angular-redux/store';


@Component({
  selector: 'app-userquizes',
  templateUrl:'userquizes.component.html',
  styleUrls:['userquizes.component.css']
})
export class UserQuizesComponent implements OnInit {
   userQiusez=[];
  constructor(private route: ActivatedRoute,private dataService: DataService) {
     }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.dataService.get_userquizes().subscribe((res:[])=>{                  
                  this.userQiusez=res;
                
    });    

    });
  }



}
