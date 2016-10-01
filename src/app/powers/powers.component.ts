import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from '../shared';

@Component({
  selector: 'vil-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  villains: Villain[];
  randomVillain: Villain;

  constructor(private villainService: VillainService) {}

  ngOnInit() {
    this.villains = this.villainService.getVillains();

    let randomKey: number = Math.floor(Math.random() * this.villains.length);
    this.randomVillain = this.villains[randomKey];
  }

}
