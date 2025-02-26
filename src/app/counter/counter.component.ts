import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public count: number = 0;

  counter(counterType: string){

    // using ternary conditon, we can increment and decrement the counter

    // ternary operator syntax: condition ? (true portion) : (false portion)
    // ternary operator syntax: condition ? (condition gets satisfied) : (condtion does not get satisfied)
    (counterType === 'add') ? this.count++ : this.count--;
  }
}
