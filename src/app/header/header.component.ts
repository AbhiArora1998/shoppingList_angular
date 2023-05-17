import { Component, Output,EventEmitter, OnInit, OnDestroy  } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DatastorageService } from "../shared/data_storage.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
    collapsed = true;
    private userSub: Subscription
    isAuthenticated = false;
    // @Output() featureSelected = new EventEmitter();

    constructor(private datastorageService:DatastorageService,private authService:AuthService){}
    // onSelect(feature:string){
    //     console.log(feature)
    //     this.featureSelected.emit(feature);
    // }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        
    }
    onSaveData() {
        this.datastorageService.storeRcipes()
    }
    onfetchData() {
        this.datastorageService.fetchRecipes()
    }

    onLogout(){
        this.authService.logout();
    }
}