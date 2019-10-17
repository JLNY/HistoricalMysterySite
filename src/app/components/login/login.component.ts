import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;
  loginInvalid;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginIdentity();
    //this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['dashboard']);
  }

  register() {
    this.router.navigate(['user', 'register'])
  }

  cancel() {
    this.router.navigate(['dashboard']);
  }

}
