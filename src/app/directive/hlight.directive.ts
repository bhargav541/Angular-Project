import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHlight]'
})
export class HlightDirective {
  

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor='yellow';
   }
   @HostListener('click') doSomething(){
    alert('HostListener works!!');}
  
    @HostListener('mouseover') doSomethingElse(){
      console.log('mouse just hover');}
  
    @HostListener('mouseenter') doSomethingElseElse(){
      console.log('mouse just entered');}
  
      @HostListener('mousemove') doSomethingElseElseElse(){
        console.log('mouse just move');}

}





