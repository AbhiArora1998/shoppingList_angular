import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectRecipeComponent} from './recipes/select-recipe/select-recipe.component'
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    {path:'recipe' , loadChildren: ()=>import('./recipes/recipe.module').then(m=>m.RecipeModule)}
    
    
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    // every module work on its own they do not communicate with eachother 
    // hence it will be available only here in this module but we want the entire app to access the components 
    //  hence we will need to export it and put in the app.module.ts in the module section 
    exports:[RouterModule]

})
export class AppRoutingModule{

}