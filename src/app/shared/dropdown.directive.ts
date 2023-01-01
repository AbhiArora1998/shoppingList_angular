import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    // this one basically applies the class of css to whichever tag it sits on when the condition is true 
    @HostBinding('class.open') isOpen = false;
    // This listens to the click on the document then set the condition to false if it is true 
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
  }