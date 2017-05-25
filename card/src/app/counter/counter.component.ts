import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() counter: number;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  increase(): void {
    this.changeCount(+1);
  }

  decrease(): void {
    this.changeCount(-1);
  }

  changeCount(num: number) {
    this.countChange.emit(this.counter + num);
  }
}
