import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from './shared';

@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ VillainService ]
})
export class AppComponent implements OnInit {
  title = 'Villains unite!';
  villain: Villain;
  villains: Villain[];

  constructor(private villainService: VillainService) {}

  ngOnInit(): void {
    this.villains = this.villainService.getVillains();
  }

  onSelect(villain: Villain): void {
    this.villain = villain;
  }
}
