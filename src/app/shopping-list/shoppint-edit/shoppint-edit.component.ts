import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppint-edit',
  templateUrl: './shoppint-edit.component.html',
  styleUrls: ['./shoppint-edit.component.css']
})
export class ShoppintEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;  
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  newIngredient(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const ourNewIngredient = new Ingredient(ingName,ingAmount);
    this.newIngredientAdded.emit(ourNewIngredient);
    console.log(ingName,ingAmount)
  }

}
