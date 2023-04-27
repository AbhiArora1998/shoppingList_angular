import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  recipesArray:Recipe[] = [];// empty array 
  subscription:Subscription
  
  constructor(private recipeService:RecipeService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.recipesArray = this.recipeService.getRecipes();
   this.subscription= this.recipeService.recipeChanged.subscribe((recipe: Recipe[]) => {
      this.recipesArray = recipe
      console.log(this.recipesArray)
    })

  }
  newRecipe() {
    this.router.navigate(['new'], {relativeTo:this.route})
  }
  ngOnDestroy() {
   this.subscription.unsubscribe()
 }

}
