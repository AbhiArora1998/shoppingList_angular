import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";

// all the routes that we are using 
const routes: Routes = [
    { path: 'recipe', component: RecipesComponent, children: [
        // we can visit to the empty path for the recipe so that it does not need endpoint after and just display please select the recipe
    { path: '', component: SelectRecipeComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    
    {path:':id/edit', component:RecipeEditComponent},
    
],canActivate:[AuthGuard] }
]

// There can be only one forRoot module however we can use forChild 
// and then we have to export it 
@NgModule({
    imports: [RouterModule.forChild(routes)]
    ,exports: [RouterModule]
})
export class RecipeRoutingModule{

}