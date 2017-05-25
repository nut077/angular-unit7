import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input() set appDelay(time: number) {
    setTimeout(
      () => {
        this.container.createEmbeddedView(this.templateRef);
      }, time * 1000
    );
  }
}
