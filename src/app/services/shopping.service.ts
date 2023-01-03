
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
  private shoppingList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 7),
  ];

  addNewIngredient(name: string, amount: number) {
    const newIngredient: Ingredient = new Ingredient(name, amount);
      this.shoppingList.push(newIngredient);
      this.ingredientChanged.emit(this.shoppingList.slice());
    }
    
    getShoppingList() {
        

        return this.shoppingList.slice();
  }
  
  addIngredients(ingredients:Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.ingredientChanged.emit(this.shoppingList.slice())
  }

}
