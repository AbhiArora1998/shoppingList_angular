import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject,  } from "rxjs";
import { tap } from "rxjs/operators";
import { UserModel } from "./user.model";

export interface AuthReceived{
    kind: string
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?:boolean
}

@Injectable({
    providedIn:'root'
})
export class AuthService{
    // subject is good for recatively updating the upcoming changes. However we can use
    // behaviorsubject for the ondemand model. it can give you the value to a previous value even  before even subscibing it
    // it takes initial value which we will pass null 
    user = new BehaviorSubject<UserModel>(null);

    constructor(private http:HttpClient) {
        
    }
    signUp(email:string, password:string) {
      return  this.http.post<AuthReceived>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIT0--mgt9qhZiUGUw3hVZOO-l2Ha3jyM', {
            email: email,
            password: password,
            returnSecureToken:true
        }).pipe(tap(
            Response => {
                const expireInTime = new Date(new Date().getTime() + +Response.expiresIn*1000)
                const user = new UserModel(Response.email, Response.localId, Response.idToken, expireInTime)
                this.user.next(user);
              }
          ))
    }

    login(email: string, password: string) {
      return  this.http.post<AuthReceived>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIT0--mgt9qhZiUGUw3hVZOO-l2Ha3jyM', {
            email: email,
            password: password,
            returnSecureToken:true
      }).pipe(tap(Response => {
          this.handleAuthentication(Response.email,Response.localId,Response.idToken,+Response.expiresIn,)
      }))
        
    }

    private handleAuthentication(email: string, userId:string,token:string, expiresIn:number) {
        const expireInTime = new Date(new Date().getTime() + expiresIn*1000)
        const user = new UserModel(email, userId, token, expireInTime)
        this.user.next(user);
    }
}