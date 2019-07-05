import { Injectable } from '@angular/core';
import { IUser } from '../types/user';

@Injectable()
export class AuthService {
    currentUser: IUser;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            userId: 1,
            userName,
            firstName: 'jingxin',
            lastName: 'li'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
