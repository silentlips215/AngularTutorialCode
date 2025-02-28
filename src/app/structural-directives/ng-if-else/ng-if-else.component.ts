import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ng-if-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if-else.component.html',
  styleUrl: './ng-if-else.component.css'
})
export class NgIfElseComponent {
  // public display = (0 >5);
  public display = (0 < 5);
  public fruit = "Banana";
}
