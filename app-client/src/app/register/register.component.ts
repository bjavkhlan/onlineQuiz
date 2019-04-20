import { Component, OnInit } from '@angular/core';
import { RegisterModel} from '../models/register.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel =new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm =this.formbuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
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
  onRegisterSubmit() {
    alert(this.user.name + ' ' + this.user.email + ' ' + this.user.password);
  }
}
