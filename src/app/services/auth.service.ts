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
    private user: User | null;
    
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

    register(userName: string, password: string){
        this.currentUser = {
            userId: 999,
            userName: userName,
            firstName: userName,
            lastName: null
        }
    }

    logOutUser() {
        this.currentUser = null
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
        authority: 'http://localhost:5000',
        client_id: 'hm-angular',
        redirect_uri: 'http://localhost:4200/user/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type:"id_token token",
        scope:"openid profile api1"
    };
}