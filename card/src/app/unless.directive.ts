import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}


  @Input() set appUnless(condition: boolean) {
    if (condition) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.template);
    }
  }
}
