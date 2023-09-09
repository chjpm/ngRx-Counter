import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-ouput',
  templateUrl: './counter-ouput.component.html',
  styleUrls: ['./counter-ouput.component.css']
})
export class CounterOuputComponent implements OnInit {
  counter: number = 0;

  //Here we need to get the counter from store to display
  constructor(private store: Store<{counter: {counter: number}}>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
    })
  }
}


