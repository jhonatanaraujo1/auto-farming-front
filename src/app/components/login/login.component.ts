import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from "./service/login.service";
import { TokenStorageService } from 'src/app/services/TokenStorageService';
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

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router,
              private AuthService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // const { email, password } = this.loginForm;

    // const login: Login = this.loginForm.value;

    const login = {
      "email": "meuemaisadasdl@email.com",
      "password": "123"
    }

    const { email, password } = login;

    this.AuthService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
