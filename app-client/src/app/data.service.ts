import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    baseUrl:string = "http://localhost:5000/api";
  constructor(public http: HttpClient, private router: Router) {    
  }
  get_subjects(){
    return this.http.get(this.baseUrl + '/levels/subjects');
  }   
  login(email:String, password:String) {
    this.http.post(this.baseUrl + '/users/login', {email:email, password:password})
    .subscribe( data => {
      console.log(data);
      localStorage.setItem('token', data['token']);

      this.router.navigate(['/subjects']);

    }, err => {
      console.log(err);
    })

  }
  register(name: String, email:String, password: String){
    this.http.post(this.baseUrl + '/users/signup', {name: name, email: email, password: password })
    .subscribe( data=> {
      console.log(data);
      localStorage.setItem('token', data['token']);
      this.router.navigate(['/login']);
    },err=> {
      console.log(err);
    })
    

    
  }
  get_levels(subjectid){
    return this.http.get(this.baseUrl + '/levels/'+subjectid);
  }
  get_questions(levelid){
    return this.http.get(this.baseUrl + '/levels/'+levelid);
  }
}
