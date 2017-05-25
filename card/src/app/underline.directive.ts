import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  static DEFAULT_COLOR = 'white';
  @Input('appUnderline') color: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setTextDecoration('underline');
    this.setHighligth(this.color || UnderlineDirective.DEFAULT_COLOR);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setTextDecoration('none');
    this.setHighligth(null);
  }

  private setTextDecoration(flag: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', flag);
  }

  private setHighligth(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
