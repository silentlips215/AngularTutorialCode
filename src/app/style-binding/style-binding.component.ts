import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  // stylebinding - object
stylebinding = {'background-color':'blue', 'color':'white'};
myStyles =   {'background-color':'blue', 'color':'white' };
    
  
  
}
