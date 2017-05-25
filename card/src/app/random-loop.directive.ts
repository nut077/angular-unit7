import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {RandomLoopContext} from "./random-loop-context";

@Directive({
  selector: '[appRandomLoop]'
})
export class RandomLoopDirective {

  constructor(
    private templateRef: TemplateRef<RandomLoopContext>,
    private container: ViewContainerRef
  ) { }

  @Input() set appRandomLoop(items: number[]) {
    const randomNum = this.random(items);
    for (let i = 0; i < randomNum; i++) {
      this.createElement(randomNum);
    }
  }

  private random(items) {
    return items[~~(Math.random() * items.length)];
  }

  private createElement(num: number) {
    this.container.createEmbeddedView(
      this.templateRef,
      new RandomLoopContext(num)
    );
  }

}
