import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../services/recipe.service";

@Injectable({
    providedIn:'root'
})
export class DatastorageService{
    url = 'https://ng-recipebook-4086b-default-rtdb.firebaseio.com/'
    constructor(private http: HttpClient, private recipeService:RecipeService) { }
    
    storeRcipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.url + "recipes.json", recipes).subscribe(resposne => {
            
        }), error => {
            console.log(error)
        }
    }

    fetchRecipes() {
        this.http.get<Recipe[]>(this.url + "/recipes.json").
            pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients:recipe.ingredients?recipe.ingredients:[]}
            })
        })).subscribe((resposne: Recipe[]) => {
            console.log(resposne)
            this.recipeService.setRecipes(resposne)
        })
    }
}