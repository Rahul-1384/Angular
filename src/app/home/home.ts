import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Counter } from '../components/counter/counter';
import { Todos } from '../todos/todos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Greetings, Counter, Todos, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homeMessage = signal('Parent data')

  keyUpHandler(event: KeyboardEvent){
    console.log(`The key ${event.key} pressed`);
  }
}
