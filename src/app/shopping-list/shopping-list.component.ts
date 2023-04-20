import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  changedObserved: Subscription;
  constructor(private shopingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListService.getShoppingList();
    this.changedObserved = this.shopingListService.ingredientChanged.subscribe((ingredients:Ingredient[]) =>
    {
     
      this.ingredients = ingredients
    })
    console.log(this.changedObserved,"here")
  }
  editMYItem(index:number) {
    this.shopingListService.startEditing.next(index);
  }
  addNewIngreDient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
  ngOnDestroy() {
    this.changedObserved.unsubscribe();
  }

}
