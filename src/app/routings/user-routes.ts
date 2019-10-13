import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthCallbackComponent } from '../components/auth-callback/auth-callback.component';

export const userRoutes = [
    {path: 'auth-callback', component: AuthCallbackComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
];
