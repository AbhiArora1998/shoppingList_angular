import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingList';
  featureDisplaying:string='recipe'; 
  onNavigate(feature:string){
    this.featureDisplaying = feature;
  }
}
