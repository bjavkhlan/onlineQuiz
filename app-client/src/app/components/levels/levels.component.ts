import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-levels',
  template: ``,
  
})
export class LevelsComponent implements OnInit {
  subjectid:string;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route.params.subscribe(p => {
      this.subjectid = p['subjectid']; 
      // request levels using    subjectid 
    });
  }

}
