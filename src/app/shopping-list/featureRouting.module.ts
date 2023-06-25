import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const routes: Routes = [
    { path: 'shoppingList', component: ShoppingListComponent },
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class FeatureRoutingModule{

}