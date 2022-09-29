import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Login} from "../../shared/models/login.model";
import {LoginService} from "./service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
  }

  logar() {
    if (this.loginForm.invalid) {
      return;
    }
    const login: Login = this.loginForm.value;
    this.loginService.logar(login)
      .subscribe();
  }
}
