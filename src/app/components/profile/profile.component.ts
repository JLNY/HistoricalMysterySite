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
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [
        Validators.required,
        Validators.pattern('[a-zA-Z].*')
      ]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
    if (!this.authService.isAuthenticated()){
      this.router.navigate(['dashboard'])
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

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
