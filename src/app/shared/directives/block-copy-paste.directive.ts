import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[blockCopyPaste]'
})
export class BlockCopyPasteDirective {

  // @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
  //   e.preventDefault();
  //   alert('Peguei no flaga! não faça isso :(')
  // }

  // @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
  //   e.preventDefault();
  // }
}