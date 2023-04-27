import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping.service";

@Injectable()
export class RecipeService{

  recipeChanged = new Subject<Recipe[]>();
  recipeClicked = new EventEmitter<Recipe>();
  toShoppingList = new EventEmitter<string>();
    //arrays are reference type in javascript 
   private recipesArray:Recipe[] = [
     new Recipe('A test recipe', 'this is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg', [
          
       new Ingredient('meat',1),new Ingredient('bread',2), ]),
     new Recipe('Another test recipe', 'this is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg', [
      new Ingredient('eggs',1),new Ingredient('milk',2),
        ])
  ];
  
  constructor(private slService : ShoppingListService,) {
    
  }

  getRecipes(){
          // we should not pass the reference
          // slice will provide the copy of the array  
          return this.recipesArray.slice();
  }
  addIngredientsToshoppingList(ingredient:Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

  recipeIdSelected(id:number) {
    return this.recipesArray[id];
  }

  addnewRecipe(recipe: Recipe) {
    this.recipesArray.push(recipe);
    this.recipeChanged.next(this.recipesArray.slice())
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipesArray[index] = recipe;
    this.recipeChanged.next(this.recipesArray.slice())

  }

}