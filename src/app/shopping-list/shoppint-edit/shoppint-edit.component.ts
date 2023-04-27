import { Component,  OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppint-edit',
  templateUrl: './shoppint-edit.component.html',
  styleUrls: ['./shoppint-edit.component.css']
})
export class ShoppintEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription:Subscription
  editmode: boolean = false
  editeItemIndex: number;
  editedItem: Ingredient;
  constructor(private shopingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shopingListService.startEditing.subscribe((index: number) => {
      this.editeItemIndex = index
      this.editmode = true;
      this.editedItem = this.shopingListService.getIngredient(index)
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount:this.editedItem.amount
      })
    });
  }
  // here during submission of the form we pass the values html inputs using the ngForm and we create a new ingredient and add that to the shopping List using the shopingListService
  onSubmitForm(form:NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editmode) {
      this.shopingListService.updateIngredients(this.editeItemIndex,newIngredient)
    } else {
      this.shopingListService.addNewIngredient(newIngredient);
    }
    this.editmode = false;
    form.reset() 
  }
  onDelete() {
    this.shopingListService.deleteIngredient(this.editeItemIndex)
    this.onClear();

  }

  onClear() {
    this.shoppingListForm.reset();
    this.editmode = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
