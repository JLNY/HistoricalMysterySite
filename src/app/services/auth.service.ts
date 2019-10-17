import { Injectable } from '@angular/core';
import { IUser } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs'; 

@Injectable()
export class AuthService {
    currentUser: IUser;

    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    private manager = new UserManager(getClientSettings());
    user: User | null;
    
    constructor(private http: HttpClient) {
        this.manager.getUser().then(user => { 
            this.user = user;      
            this._authNavStatusSource.next(this.isAuthenticated());
          });
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            userId: 1,
            userName,
            firstName: 'jingxin',
            lastName: 'li'
        };
    }

    loginIdentity() {
        return this.manager.signinRedirect();   
    }

    async completeAuthentication() {
        this.user = await this.manager.signinRedirectCallback();
        console.log(this.user);
        this.currentUser = {
            userId: this.user.profile['sid'],
            userName: this.user.profile['preferred_username'],
            firstName: this.user.profile['preferred_username'],
            lastName: this.user.profile['preferred_username']
        }
        this._authNavStatusSource.next(this.isAuthenticated());      
    }  

    async logOutUser() {
        console.log('log out')
        return this.manager.signoutRedirect()
    }

    isAuthenticated() {
        return this.user != null && !this.user.expired;
        //return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}

export function getClientSettings(): UserManagerSettings {
    return {
        authority: 'https://historicalmysteryidp.azurewebsites.net',
        client_id: 'hm-angular',
        redirect_uri: 'https://historicalmysteryidp.azurewebsites.net/user/auth-callback',
        post_logout_redirect_uri: 'https://historicalmysteryidp.azurewebsites.net',
        response_type:"id_token token",
        scope:"openid profile api1"
    };
}