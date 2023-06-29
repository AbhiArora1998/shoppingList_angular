import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeRoutingModule } from "./recipeRouting.module";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";


@NgModule({
    // first we got to decelare what components we are going to use here
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ],
    // we need to import all the modules that are being used in these components such as ngif or ngfor and formsmodule 
    // note we also have recipeRoutingModule since we have also seperating its paths as well
    imports:[RouterModule, CommonModule, FormsModule,ReactiveFormsModule, RecipeRoutingModule]
    ,
    // then we export the components in case other modules which imports recipe module can use it 
    exports: [
     
    ],
})
export class RecipeModule{

}