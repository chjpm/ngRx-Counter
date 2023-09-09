import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{

 
  //Below counter is from store/counter.state.ts
  constructor(private store: Store<{ counter: {counter: number}}>) {}

  ngOnInit(): void {
    
  }

  //Below, we will dispatch the store
  onIncrement() {
    //Here increment() imported from store/counter.actions.ts
    this.store.dispatch(increment());
  }
  onDecrement() {
    //Here decrement() imported from store/counter.actions.ts
    this.store.dispatch(decrement());
  }

  onReset() {
    //Here reset() imported from store/counter.actions.ts
    this.store.dispatch(reset());
  }
}
