import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppintEditComponent } from './shopping-list/shoppint-edit/shoppint-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingListService } from './services/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule} from '@angular/common/http'
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loadingSpinner.component';
import { AlertComponent } from './shared/alert.component';
import { RecipeModule } from './recipes/recipe.module';


@NgModule({
  // directives , services, components, custom pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    
    ShoppingListComponent,
    ShoppintEditComponent,
    DropdownDirective,
    
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    // this allow us to import other modules into this modules
    // or split your app in different modules

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
