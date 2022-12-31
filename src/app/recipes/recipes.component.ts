import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  myRecipe:Recipe;

  constructor() { }

  ngOnInit(): void {
  }
  receivingRecipe(recipe:Recipe){
    this.myRecipe = recipe;
    // console.log('received recipe',recipe)
  }

}
