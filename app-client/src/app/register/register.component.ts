import { DataService } from './../data.service';
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
  
  constructor(private formbuilder: FormBuilder, private dataService: DataService) { }

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
    this.dataService.register(this.registerForm.get('name').value, this.registerForm.get('email').value, this.registerForm.get('password').value );
  }
}
