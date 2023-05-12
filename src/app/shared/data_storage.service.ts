import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../services/recipe.service";

@Injectable({
    providedIn:'root'
})
export class DatastorageService{
    url = 'https://ng-recipebook-4086b-default-rtdb.firebaseio.com/'
    constructor(private http: HttpClient, private recipeService:RecipeService,private authService:AuthService) { }
    
    storeRcipes() {
        const recipes = this.recipeService.getRecipes();
        this.authService.user.pipe(
            take(1),
            exhaustMap(user => {

               return this.http.put(this.url + "recipes.json", recipes, {
                       params: new HttpParams().set('auth' , user.token)
                   });
         })).subscribe(resposne => {
            
        }), error => {
            console.log(error)
        }
    }

    fetchRecipes() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {

                return this.http.get<Recipe[]>(this.url + "/recipes.json", {
                       params: new HttpParams().set('auth' , user.token)
                   });
         }),map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients:recipe.ingredients?recipe.ingredients:[]}
        })
         })).subscribe(Response => {
            this.recipeService.setRecipes(Response)
            
    });
    }
}