import { Component } from '@angular/core';
import { Villain } from './shared';

@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Villains unite!';
  villain : Villain = {
    id: 23,
    alias: 'Captain Spaghetticoder',
    power: 'Bug Creator'
  };
}
