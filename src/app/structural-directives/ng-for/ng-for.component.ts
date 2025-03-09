import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 fruits = ["Apple", "Mango", "Banana", "Strawberry"];

 numbers = [1,2,3,4,5,6,7,8,9,10];

 // array of objects
 public persons = [
  {name: "Kumar", age: 25, isMarried: true},
  {name: "Adil", age: 29, isMarried: false},
  {name: "Uzair", age: 27, isMarried: true},

 ]
}
