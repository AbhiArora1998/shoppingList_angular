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
  ingredient: Ingredient[];
  changedObserved: Subscription;
  constructor(private shopingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredient = this.shopingListService.getShoppingList();
    this.changedObserved = this.shopingListService.ingredientChanged.subscribe((ingredient:Ingredient[]) =>
    {
     
      this.ingredient = ingredient
    })
    console.log(this.changedObserved,"here")
  }
  editMYItem(index:number) {
    this.shopingListService.startEditing.next(index);
  }
  addNewIngreDient(ingredient:Ingredient){
    this.ingredient.push(ingredient);
  }
  ngOnDestroy() {
    this.changedObserved.unsubscribe();
  }

}
