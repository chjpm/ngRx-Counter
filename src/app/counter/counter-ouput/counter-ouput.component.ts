import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-ouput',
  templateUrl: './counter-ouput.component.html',
  styleUrls: ['./counter-ouput.component.css']
})
export class CounterOuputComponent {
  @Input() counter: any; 
}
