import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] ;
  constructor(private shopingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListService.getShoppingList();
    this.shopingListService.ingredientChanged.subscribe((ingredients:Ingredient[]) =>
    {
      this.ingredients = ingredients
    })
  }
  addNewIngreDient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
