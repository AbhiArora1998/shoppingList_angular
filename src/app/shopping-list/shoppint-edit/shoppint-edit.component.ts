import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppint-edit',
  templateUrl: './shoppint-edit.component.html',
  styleUrls: ['./shoppint-edit.component.css']
})
export class ShoppintEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;  

  constructor(private shopingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  newIngredient(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    this.shopingListService.addNewIngredient(ingName, ingAmount);
    
  }

}
