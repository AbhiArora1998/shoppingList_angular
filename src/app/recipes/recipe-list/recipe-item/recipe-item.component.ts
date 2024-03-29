import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index:number;
  
  constructor(private recipeService:RecipeService,) { }

  ngOnInit(): void {
    console.log(this.recipe,"hhhhhh")
  }

  

}
