import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";


@NgModule({
    // first we got to decelare what we are going to use here
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ],
    imports:[RouterModule, CommonModule, FormsModule,ReactiveFormsModule]
    ,
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ],
})
export class RecipeModule{

}