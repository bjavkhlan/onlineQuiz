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
  login(email:String, password:String) {
    this.http.post(this.baseUrl + '/users/login', {email:email, password:password})
    .subscribe( data => {
      localStorage.setItem('token', data['token']);
    }, err => {
      console.log(err);
    })
  }
}
