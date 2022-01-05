import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('position', [
      state('actuelle', style({
        'transform': 'translateX(0%)'
      })),
      state('gauche', style({
        'transform': 'translateX(-150%)',
      })),
      state('gauche2', style({
        'transform': 'translateX(-300%)'
      })),
      state('droite', style({
        'transform': 'translateX(150%)'
      })),
      transition('actuelle => gauche', animate('1000ms ease')),
      transition('actuelle => gauche2', animate('1000ms ease')),
      transition('actuelle => droite', animate('1000ms ease')),
      transition('gauche => actuelle', animate('1000ms ease')),
      transition('gauche => gauche2', animate('1000ms ease')),
      transition('gauche => droite', animate('1000ms ease')),
      transition('gauche2 => actuelle', animate('1000ms ease')),
      transition('gauche2 => gauche', animate('1000ms ease')),
      transition('gauche2 => droite', animate('1000ms ease')),
      transition('droite => actuelle', animate('1000ms ease')),
      transition('droite => gauche', animate('1000ms ease')),
      transition('droite => gauche2', animate('1000ms ease')),
    ]),
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

  @Input() position!: string;
  initialisation!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.position = "droite";
    this.initialisation = "nonDebutee";
  }

  initialise(): void {
    if(this.initialisation === 'nonDebutee'){
      this.initialisation = 'terminee';
    }
  }

}
