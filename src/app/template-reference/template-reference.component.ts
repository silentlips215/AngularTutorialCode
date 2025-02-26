import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})

export class TemplateReferenceComponent {
  displayName = '';
  displayFirstName = '';

  getName(value: string)
  {
    this.displayName = value;
  }

  getfirstName(value: string)
  {
    this.displayFirstName = value;
  }
  // getName(value: string){
  //   console.log(value);
  // }
}
