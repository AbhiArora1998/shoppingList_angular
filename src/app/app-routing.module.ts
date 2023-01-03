import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { from } from "rxjs";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectRecipeComponent} from './recipes/select-recipe/select-recipe.component'
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    { path: '', redirectTo:'/recipe' ,pathMatch:'full' },
    { path: 'recipe', component: RecipesComponent, children: [
            // we can visit to the empty path for the recipe so that it does not need endpoint after and just display please select the recipe
        { path: '', component: SelectRecipeComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        
        {path:':id/edit', component:RecipeEditComponent},
        
    ] },
    {path:'shoppingList' ,component:ShoppingListComponent}
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class AppRoutingModule{

}