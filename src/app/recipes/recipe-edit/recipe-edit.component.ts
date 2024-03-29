import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route:ActivatedRoute,private recipeService: RecipeService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      
    })
  }
  get controls() { // a getter!
    
    return (<FormArray>this.recipeForm.get('ingredient')).controls;
  }
  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    } else {
      console.log(this.recipeForm.value)
      this.recipeService.addnewRecipe(this.recipeForm.value)
      
    }
    this.onCancel()
  }
  private initForm() {
    let recipeName = ""
    let recipeImagePath = ""
    let recipeDescription = ""
    let recipeIngredient = new FormArray([])
    
    if (this.editMode) {
      const recipe = this.recipeService.recipeIdSelected(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      if (recipe.ingredient) {
        for (let ingredient of recipe.ingredient) {
          recipeIngredient.push(new FormGroup(
            {
              'name': new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            }
          ))
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredient':recipeIngredient
      
    })
  }
  addNewSlot() {
    (<FormArray>this.recipeForm.get('ingredient')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl()
    }))
  }
  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onDeleteIngredient(index:number) {
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index)
    
  }


}
