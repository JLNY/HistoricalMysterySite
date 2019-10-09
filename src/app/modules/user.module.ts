import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from '../routings/user-routes';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AuthCallbackComponent } from '../components/auth-callback/auth-callback.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
        RegisterComponent,
        AuthCallbackComponent
    ],
    providers: [

    ]
})
export class UserModule {}
