import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOuputComponent } from './counter/counter-ouput/counter-ouput.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOuputComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
