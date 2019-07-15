import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'hm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName;
  password;
  mouseoverRegister;
  registerInvalid;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register(formValues) {
    this.authService.register(formValues.userName, formValues.password);
    this.router.navigate(['dashboard']);
  }

  cancel() {
    this.router.navigate(['dashboard']);
  }
  login(){
    this.router.navigate(['user', 'login'])
  }
}
