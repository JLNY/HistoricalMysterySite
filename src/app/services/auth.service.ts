import { Injectable } from '@angular/core';
import { IUser } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    currentUser: IUser;
    
    constructor(private http: HttpClient) {}

    loginUser(userName: string, password: string) {
        this.currentUser = {
            userId: 1,
            userName,
            firstName: 'jingxin',
            lastName: 'li'
        };
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
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
