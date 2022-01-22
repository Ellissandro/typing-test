import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[blockCopyPaste]',
})
export class BlockCopyPasteDirective {
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent): void {
    e.preventDefault();
    alert('Peguei no flaga! não faça isso :(');
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent): void {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent): void {
    e.preventDefault();
  }
}
