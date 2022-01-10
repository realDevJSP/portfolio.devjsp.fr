import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
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
      state('gauche3', style({
        'transform': 'translateX(-450%)'
      })),
      transition('actuelle => gauche', animate('1000ms ease')),
      transition('actuelle => gauche2', animate('1000ms ease')),
      transition('actuelle => gauche3', animate('1000ms ease')),
      transition('gauche => actuelle', animate('1000ms ease')),
      transition('gauche => gauche2', animate('1000ms ease')),
      transition('gauche => gauche3', animate('1000ms ease')),
      transition('gauche2 => actuelle', animate('1000ms ease')),
      transition('gauche2 => gauche', animate('1000ms ease')),
      transition('gauche2 => gauche3', animate('1000ms ease')),
      transition('gauche3 => actuelle', animate('1000ms ease')),
      transition('gauche3 => gauche', animate('1000ms ease')),
      transition('gauche3 => gauche2', animate('1000ms ease')),
    ])
  ]
})
export class AccueilComponent implements OnInit {

  @Input() position!: string;

  nom!: string;
  titre!: string;

  constructor() { }

  ngOnInit(): void {
    this.nom = "Julien Salgueiro Pereira";
    this.titre = "Développeur";
    this.position = "actuelle";
  }
}