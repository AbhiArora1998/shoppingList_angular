import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingListService } from './services/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule} from '@angular/common/http'
import { LoadingSpinnerComponent } from './shared/loadingSpinner.component';
import { AlertComponent } from './shared/alert.component';

import { FeatureModule } from './shopping-list/feature.module';
import { FeatureRoutingModule } from './shopping-list/featureRouting.module';




@NgModule({
  // directives , services, components, custom pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    
    LoadingSpinnerComponent,
    AlertComponent,
    
  ],
  imports: [
    // this allow us to import other modules into this modules
    // or split your app in different modules

    BrowserModule,
    AppRoutingModule,
  
    ReactiveFormsModule,
    HttpClientModule,
  
    
    
  ],
  // any services that we are planning to inject will get in the providers
  
  providers: [ShoppingListService, RecipeService],
  // bootstrap is really important to start your app it defines which component is directly available in the index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
