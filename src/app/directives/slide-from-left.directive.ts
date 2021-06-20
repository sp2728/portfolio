import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { trigger, transition, animate, style, AnimationPlayer, AnimationBuilder } from '@angular/animations'

@Directive({
  selector: '[appSlideFromLeft]'
})
export class SlideFromLeftDirective {
  
  @HostListener('window:scroll', [])
  scroll(){

  }

  constructor(private el:ElementRef) {
   }

}
