import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from '../shared';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'vil-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.css']
})
export class VillainListComponent implements OnInit {
  title = 'Villains unite!';
  villain: Villain;
  villains: Villain[];

  constructor(
    private villainService: VillainService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.villains = this.villainService.getVillains();

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.villain = this.villainService.getVillain(id);
    });
  }
}
