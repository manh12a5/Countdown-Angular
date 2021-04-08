import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-demo-count-down',
  templateUrl: './demo-count-down.component.html',
  styleUrls: ['./demo-count-down.component.scss']
})
export class DemoCountDownComponent implements OnInit {
  @Input('times')

  get second() {
    return this.time;
  }
  set second(value) {
    const v = Number(value);
    this.time = Number.isNaN(v) ? 15 : v;
  }
  constructor() { }

  startTimer: any;

  time = 10;

  @Output()
  finish = new EventEmitter<boolean>();

  ngOnInit() {
  }

  start() {
    this.startTimer = setInterval(() => {
      this.time --;
      this.isCountDownFinish();
      console.log(this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.startTimer);
  }
  isCountDownFinish() {
    if (this.time === 0) {
      this.stop();
      this.finish.emit(true);
    }
  }

}
