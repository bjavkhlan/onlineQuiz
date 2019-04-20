import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    baseUrl:string = "http://localhost:5000/api";
  constructor(public http: HttpClient) {    
  }
  get_subjects(){
    return this.http.get(this.baseUrl + '/levels/subjects');
}  
}
