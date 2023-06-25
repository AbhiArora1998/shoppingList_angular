import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [AuthComponent]
    , imports: [RouterModule.forChild([{path :'auth',component:AuthComponent}]), CommonModule, ReactiveFormsModule,FormsModule],
    
})

export class AuthRoutingModule{

}