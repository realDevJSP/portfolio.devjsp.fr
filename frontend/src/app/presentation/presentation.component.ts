import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('etatInitialisation', [
      state('terminee', style({
        'transform': 'translateY(0%)',
        'opacity': '100%'
      })),
      state('nonDebutee', style({
        'transform': 'translateY(200px)',
        'opacity': '0%'
      })),
      transition('nonDebutee => terminee', animate('1000ms ease'))
    ])
  ]
})
export class PresentationComponent implements OnInit {

  initialisation!: String;

  constructor() {
  }

  ngOnInit(): void {
    this.initialisation = "nonDebutee";
  }

  initialise(): void {
    if(this.initialisation === 'nonDebutee'){
      this.initialisation = 'terminee';
    }
  }

}
