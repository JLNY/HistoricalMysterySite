import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userName = new FormControl(
      this.authService.user.profile["preferred_name"],
      [
        Validators.required,
        Validators.pattern('[a-zA-Z].*')
      ]
    );
    this.profileForm = new FormGroup({
      userName: this.userName,
    });
    if (!this.authService.isAuthenticated()){
      this.router.navigate(['dashboard'])
    }
  }

  // validateFirstName() {
  //   return this.firstName.valid || this.firstName.untouched;
  // }

  // validateLastName() {
  //   return this.lastName.valid || this.lastName.untouched;
  // }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['dashboard']);
    }
  }

  isLoggedIn(){
    this.authService.isAuthenticated()
  }

  logout(){
    this.authService.logOutUser();
    this.router.navigate(['dashboard'])
  }

  cancel() {
    this.router.navigate(['dashboard']);
  }

}
