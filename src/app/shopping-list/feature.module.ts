import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FeatureRoutingModule } from "./featureRouting.module";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppintEditComponent } from "./shoppint-edit/shoppint-edit.component";



@NgModule({
    declarations:[ ShoppingListComponent,
        ShoppintEditComponent,],
    imports: [FeatureRoutingModule, CommonModule, ReactiveFormsModule, FormsModule],
    exports:[ShoppingListComponent,ShoppintEditComponent]
})
export class FeatureModule{

}