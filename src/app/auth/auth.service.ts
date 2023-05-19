import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject,  } from "rxjs";
import { tap } from "rxjs/operators";
import { UserModel } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

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
    tokenExpirationTime: any
    
    constructor(private http:HttpClient, private router:Router) {
        
    }
    signUp(email:string, password:string) {
      return  this.http.post<AuthReceived>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.fireBaseKey, {
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
      return  this.http.post<AuthReceived>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.fireBaseKey, {
            email: email,
            password: password,
            returnSecureToken:true
      }).pipe(tap(Response => {
          this.handleAuthentication(Response.email,Response.localId,Response.idToken,+Response.expiresIn,)
      }))
        
    }

    private handleAuthentication(email: string, userId:string,token:string, expiresIn:number) {
        const expireInTimes = new Date(new Date().getTime() + expiresIn*1000)
        const user = new UserModel(email, userId, token, expireInTimes)
        this.user.next(user);
        this.autoLogout(expiresIn*1000)
        localStorage.setItem("userData",JSON.stringify(user))
    }

    logout(){
        this.user.next(null);
        this.router.navigate(["/auth"])
        localStorage.removeItem("userData")

        if (this.tokenExpirationTime) {
            clearTimeout(this.tokenExpirationTime)
        }
        this.tokenExpirationTime = null
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token:string,
            _tokenExpirationDate:string,
            
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }

        const loadedUser = new UserModel(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
        
        if (loadedUser.token) {
            this.user.next(loadedUser)
            // this.autoLogout(expiresIn*1000)
            const expirationDuratioss = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
            this.autoLogout(expirationDuratioss)
        }
    }

    autoLogout(expirationDuration: number) {
       this.tokenExpirationTime =  setTimeout(() => {
            this.logout();
        },expirationDuration)
    }

}