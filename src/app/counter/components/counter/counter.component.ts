import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <p>
      counter: {{counter}}
    </p>
    <div class="btn-group">
      <button class="btn btn-sm btn-success" type="button" (click)="increaseBy(1)">+ 1</button>
      <button class="btn btn-sm btn-danger" type="button" (click)="resetCounter()">Reset</button>
      <button class="btn btn-sm btn-warning" type="button" (click)="increaseBy(-1)">- 1</button>
    </div>
    <hr>
    `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 100;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 100;
  }

  /* decrementBy(): void {
    if (this.counter <= 0) {
      return;
    }
    this.counter--;
  } */
}
