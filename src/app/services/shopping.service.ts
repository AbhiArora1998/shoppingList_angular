import { Subject} from 'rxjs/Subject'
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();
  private shoppingList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 7),
  ];

  addNewIngredient(newIngredient:Ingredient) {
    
      this.shoppingList.push(newIngredient);
      this.ingredientChanged.next(this.shoppingList.slice());
    
  }
  
  getIngredient(index:number) {
      return this.shoppingList[index]
  }

  getShoppingList() {
        return this.shoppingList.slice();
  }
  
  addIngredients(ingredients:Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.ingredientChanged.next(this.shoppingList.slice())
  }

}
