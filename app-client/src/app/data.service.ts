import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { USER_LOGIN, USER_LOGOUT } from './actions';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:5000/api";
  private jwtHelper: JwtHelperService;
  constructor(public http: HttpClient, private router: Router, private stateStore: NgRedux<IAppState>) {
    this.jwtHelper = new JwtHelperService();
  }

  getUser() {
    const decodedtoken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    this.stateStore.dispatch({ type: USER_LOGIN, isAdmin: decodedtoken.isAdmin, userName: decodedtoken.username});
  }
  login(email:String, password:String) {
    this.http.post(this.baseUrl + '/users/login', {email:email, password:password})
    .subscribe( data => {
      localStorage.setItem('token', data['token']);
      this.getUser();
      this.router.navigate(['/subjects']);
    }, err => {
      console.log(err);
    });
  }

  register(name: String, email:String, password: String){
    this.http.post(this.baseUrl + '/users/signup', {username: name, email: email, password: password })
    .subscribe( data=> {
      console.log(data);
      this.router.navigate(['/login']);
    },err=> {
      console.log(err);
    });
  }
  logout() {
    this.stateStore.dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }


  get_subjects(){
    return this.http.get(this.baseUrl + '/levels/subjects');
  }   
  get_levels(subjectid){
    return this.http.get(this.baseUrl + '/levels/'+subjectid);
  }
  get_questions(levelid){
    return this.http.get(this.baseUrl + '/levels/questions/'+levelid);
  }
  submit_answers(levelid,answers):any{     
    return this.http.post(this.baseUrl + '/submission/'+levelid,answers )  
   }
}
