import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";



const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    { path: 'recipe', loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule) },
    { path: 'auth', loadChildren: () => import('./auth/authRouting.module').then(m => m.AuthRoutingModule) },
    { path: 'shoppingList', loadChildren: () => import('./shopping-list/feature.module').then(m => m.FeatureModule) }
    
    
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    // every module work on its own they do not communicate with eachother 
    // hence it will be available only here in this module but we want the entire app to access the components 
    //  hence we will need to export it and put in the app.module.ts in the module section 
    exports:[RouterModule]

})
export class AppRoutingModule{

}