import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArray:Recipe[] = [
    new Recipe('A test recipe','this is simply a test','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg'),
    new Recipe('Another test recipe','this is simply a test','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg')
  ];// empty array 

  @Output() recipeToDisplay = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  recipeSelected(selectedRecipe:Recipe){
    this.recipeToDisplay.emit(selectedRecipe);
  }

}
