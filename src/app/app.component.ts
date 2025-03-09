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
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './structural-directives/ng-if/ng-if.component';
import { NgIfElseComponent } from './structural-directives/ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './structural-directives/ng-switch/ng-switch.component';
import { NgForComponent } from './structural-directives/ng-for/ng-for.component';
// decorator function
@Component({
  selector: 'app-root', //element selector
  // selector: '.app-root', // class selector
  // selector: '[app-root]', // attribute selector
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, EventsComponent, PropBindingComponent, ClassBindingComponent, NgClassComponent, StyleBindingComponent, TemplateReferenceComponent, CounterComponent, FormsModule, TwoWayBindingComponent, NgIfComponent, NgIfElseComponent, NgSwitchComponent, NgForComponent],
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
