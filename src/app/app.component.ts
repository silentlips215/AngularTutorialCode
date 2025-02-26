import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgModule } from '@angular/core';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { CounterComponent } from './counter/counter.component';
// decorator function
@Component({
  selector: 'app-root', //element selector
  // selector: '.app-root', // class selector
  // selector: '[app-root]', // attribute selector
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, EventsComponent, PropBindingComponent, ClassBindingComponent, NgClassComponent, StyleBindingComponent, TemplateReferenceComponent, CounterComponent],
  templateUrl: './app.component.html',
  // template: `hello world, senga ye`,
  styleUrl: './app.component.css',
  // styles: [`
  //   .red{
  //     color: red;
  //   }
  //   `]
})
export class AppComponent {
  title = 'Mehboob';

    

  myFunc() {
    return 'Hello World';
  }
}
