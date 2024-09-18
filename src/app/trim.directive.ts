
// IMPLEMENTATA DA CHATGPT PER APPLICARE AD OGNI INPUT LA LOGICA DELLO SPAZIO FINALE PER FUNZIONARE CON LE REGEX

import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string): void {
    const trimmedValue = value.trim();
    this.renderer.setProperty(this.el.nativeElement, 'value', trimmedValue);

    // Manually dispatch an input event to ensure the form control value is updated
    const event = new Event('input', { bubbles: true });
    this.el.nativeElement.dispatchEvent(event);
  }
}
