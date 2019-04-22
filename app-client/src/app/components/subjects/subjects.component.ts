import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-subjects',
  templateUrl:'subjects.component.html'  
})
export class SubjectsComponent implements OnInit {
 
  private subjects  = [];     
  constructor(private dataService: DataService) {
    this.dataService.get_subjects().subscribe((res:any [])=>{
      this.subjects = res;    
      console.log(this.subjects); 
  });
 }

  ngOnInit() {   
  } 

}


