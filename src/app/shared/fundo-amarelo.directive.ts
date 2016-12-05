import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' // o 'p' indica que só <p> será modificado
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer : Renderer
    ) {
    //console.log(this._elementRef);
   // _elementRef.nativeElement.style.backgroundColor = 'yellow'; --EVITAR POR SEGURANÇA 
    this._renderer.setElementStyle(_elementRef.nativeElement, 'background-color', 'yellow');
   }

}
