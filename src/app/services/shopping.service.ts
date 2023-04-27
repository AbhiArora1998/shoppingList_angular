import { Subject} from 'rxjs/Subject'
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // this subject can be quite useful as it allows to detect the change 
  // you can subscribe to it and then can use it to fetch the changed data
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

  //  update the igredients 
  updateIngredients(index:number, newIngredient:Ingredient ) {
    this.shoppingList[index] = newIngredient;
    this.ingredientChanged.next(this.shoppingList.slice())
  }

  deleteIngredient(index:number) {
    this.shoppingList.splice(index, 1)
    this.ingredientChanged.next(this.shoppingList.slice());
  }

}
