import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArray:Recipe[] = [];// empty array 

  
  constructor(private recipeService:RecipeService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipesArray = this.recipeService.getRecipes();
  }
  newRecipe() {
    this.router.navigate(['new'], {relativeTo:this.route})
  }
 

}
