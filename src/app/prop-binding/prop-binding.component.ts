import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  standalone: true,
  imports: [],
  templateUrl: './prop-binding.component.html',
  styleUrl: './prop-binding.component.css'
})
export class PropBindingComponent {
public newID = "exampleID";
public isDisabled = true;
}
