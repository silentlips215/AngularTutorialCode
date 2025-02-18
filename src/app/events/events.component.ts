import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  public name = '';
  // myEvent(){
  //   // alert("Welcome to Angular");
  //   this.name = "Learning never ends";
  // }

  // myEvent(a: string, age: number){
  //   alert(a + " " + age);
  // }

  myEvent(event: any) {
    debugger
    console.log(event);
  }
}
