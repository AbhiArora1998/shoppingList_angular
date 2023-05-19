import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppintEditComponent } from "./shoppint-edit/shoppint-edit.component";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppintEditComponent,
    ],
    imports:[RouterModule, CommonModule, FormsModule,ReactiveFormsModule],
    exports: [
        ShoppingListComponent,
        ShoppintEditComponent,
    ],
})
export class ShoppingModule{

}