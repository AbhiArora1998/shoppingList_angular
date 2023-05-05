import { Component, Output,EventEmitter  } from "@angular/core";
import { DatastorageService } from "../shared/data_storage.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    collapsed = true;
    // @Output() featureSelected = new EventEmitter();

    constructor(private datastorageService:DatastorageService){}
    // onSelect(feature:string){
    //     console.log(feature)
    //     this.featureSelected.emit(feature);
    // }
    onSaveData() {
        this.datastorageService.storeRcipes()
    }
    onfetchData() {
        this.datastorageService.fetchRecipes()
    }
}