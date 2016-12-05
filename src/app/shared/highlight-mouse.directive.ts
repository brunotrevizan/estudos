import { Directive,
   HostListener,
   ElementRef,
   Renderer,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
     /*this._renderer.setElementStyle(
        this._elementRef.nativeElement,
         'background-color','yellow');*/
     this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(){
     /*this._renderer.setElementStyle(
        this._elementRef.nativeElement,
         'background-color','white');*/
     this.backgroundColor = 'white';
  }

//MELHOR MANEIRA
//@HostBinding('style.backgroundColor') backgroundColor: string;
//tbm pode ser feito dessa maneira \/
@HostBinding('style.backgroundColor') get setColor(){
  //qualquer codigo extra
  return this.backgroundColor;
}//precisa declarar a variavel como abaixo para essa forma /\
private backgroundColor : string;

  constructor(
    /*private _elementRef : ElementRef,
    private _renderer : Renderer*/
    ) {}

}
