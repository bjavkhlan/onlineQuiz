import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-level',
  templateUrl: 'level.component.html',
  styleUrls: ['./admin.style.css']
})
export class LevelComponent implements OnInit {
  public levels:any = [];
  public subjectId:String;
  constructor(private route: ActivatedRoute, private dataService: DataService ) { 
    route.params.subscribe(
      params => {
        this.subjectId = params['subjectId'];
        this.getLevels(this.subjectId);
        
      }
    );
  }
  getLevels(subjectId) {
    this.dataService.get_levels(subjectId).subscribe(data => this.levels = data);
  }
  ngOnInit() {
  }

}
