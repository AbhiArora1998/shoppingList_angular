import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthReceived, AuthService } from './auth.service';



@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    isLoggedinMode = true;
    isLoading = false;
    error: string = null;

    constructor(private http:HttpClient,private authService:AuthService,private router:Router) {
        
    }

    onSwitchMode() {
        this.isLoggedinMode =!this.isLoggedinMode
    }
    onSubmit(authForm: NgForm) {
        
        if (!authForm.valid) {
            return
        }
        const email = authForm.value.email
        const password = authForm.value.password
        this.isLoading = true;
        

        let authObs:Observable<AuthReceived>
        if (this.isLoggedinMode) {
          authObs =  this.authService.login(email, password)
        } else {
           authObs = this.authService.signUp(email, password)
        }
        authObs.subscribe(Response => {
            console.log(Response)
            this.isLoading = false;
            this.router.navigate(['/recipe'])

        }, error => {
            console.log(error)
            this.error = "An error Occured"
            this.isLoading = false;

        })
        authForm.reset()
      
    }
}