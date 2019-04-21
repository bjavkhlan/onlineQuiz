import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { LoginModel} from '../models/login.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginModel =new LoginModel();
  loginForm: FormGroup;
  hide = true;
  
  constructor(private formbuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.loginForm =this.formbuilder.group({
     
      'email':[this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password':[this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]

    })
  }
  onLoginSubmit() {
    alert(this.user.email + ' ' + this.user.password);
    this.dataService.login(this.loginForm.get('email').value, this.loginForm.get('password').value );
  }

}
