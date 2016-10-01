import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from '../shared';

@Component({
  selector: 'vil-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.css'],
  providers: [ VillainService ]
})
export class VillainListComponent implements OnInit {
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
