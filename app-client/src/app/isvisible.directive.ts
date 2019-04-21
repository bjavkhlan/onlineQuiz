import {Directive, ElementRef, HostBinding, Input, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appIsvisible]'
})
export class IsvisibleDirective {

  @Input() 
  display=true;
  @HostBinding('style.display') myDisplay;
  
  constructor() {

  }

  ngOnInit() {
    if(this.display==false)
      this.myDisplay = 'none';
  }

}
