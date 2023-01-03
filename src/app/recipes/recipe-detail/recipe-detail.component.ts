import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  inShoppingList: boolean = false;
  id: number;
 recipe: Recipe;
  
  constructor(private recipeService:RecipeService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.inShoppingList = false;

    this.route.params.subscribe((params: Params) =>
    {
      this.id = +params['id'];
      this.recipe=this.recipeService.recipeIdSelected(this.id)
    })
  }

  inShopping(value:string) {
    this.recipeService.recipeClicked.emit(this.recipe);
    this.recipeService.addIngredientsToshoppingList(this.recipe.ingredients);
  }
  editRecipe() {
    this.router.navigate(['edit'], {relativeTo:this.route})
  }
}
