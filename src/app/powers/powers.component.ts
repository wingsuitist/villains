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
  score: number = 0;
  message: string;

  constructor(private villainService: VillainService) {}

  ngOnInit() {
    this.villains = this.villainService.getVillains();
    this.randomVillain = this.villainService.getRandomVillain();
  }

  chooseVillain(villain: Villain) {
    if(this.randomVillain.id == villain.id) {
      this.score++;
      this.message = 'correct!';
    } else {
      this.score = 0;
      this.message = 'wrong - start over.'  
    }
    this.randomVillain = this.villainService.getRandomVillain();
  }
}
