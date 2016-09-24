import { Component } from '@angular/core';
import { Villain } from './shared';

const VILLAINS: Villain[] = [
  {id: 1, alias: 'Rebooter', power: 'Random Updates'},
  {id: 2, alias: 'Break Changer', power: 'API crushing'},
  {id: 3, alias: 'Not-Tester', power: 'Edit on Prod'},
  {id: 4, alias: 'Super Spamer', power: 'Mail Fludding'},
  {id: 5, alias: 'Mrs. DDOS', power: 'Service Overuse'},
  {id: 6, alias: 'Trojan', power: 'Remote Control'},
  {id: 7, alias: 'Randzombie', power: 'Encryptor'},
  {id: 8, alias: 'Leacher', power: 'Net Overload'},
  {id: 23, alias: 'Captain Spaghetticoder', power: 'Bug Creator'}
];

@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Villains unite!';
  villains = VILLAINS;
  villain: Villain;

  onSelect(villain: Villain): void {
    this.villain = villain;
  }
}
