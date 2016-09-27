import { Component, OnInit, Input } from '@angular/core';
import { Villain } from '../shared'

@Component({
  selector: 'vil-villain-edit',
  templateUrl: './villain-edit.component.html',
  styleUrls: ['./villain-edit.component.css']
})
export class VillainEditComponent implements OnInit {

  @Input()
  villain: Villain;

  constructor() { }

  ngOnInit() {
  }

}
