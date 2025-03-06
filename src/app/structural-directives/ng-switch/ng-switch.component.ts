import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css',
})
export class NgSwitchComponent {
  // defining a string variable color for ngSwitch
  color: string = '';

  inputColor(colorName: string) {
    this.color = this.color;
    console.log(this.color);
  }
}
