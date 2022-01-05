import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { Projet } from '../_models/projet.model';

import { ProjetsService } from '../_services/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
  animations: [
    trigger('position', [
      state('actuelle', style({
        'transform': 'translateX(0%)'
      })),
      state('gauche', style({
        'transform': 'translateX(-150%)',
      })),
      state('droite', style({
        'transform': 'translateX(150%)'
      })),
      state('droite2', style({
        'transform': 'translateX(300%)'
      })),
      transition('actuelle => gauche', animate('1000ms ease')),
      transition('actuelle => droite2', animate('1000ms ease')),
      transition('actuelle => droite', animate('1000ms ease')),
      transition('gauche => actuelle', animate('1000ms ease')),
      transition('gauche => droite2', animate('1000ms ease')),
      transition('gauche => droite', animate('1000ms ease')),
      transition('droite2 => actuelle', animate('1000ms ease')),
      transition('droite2 => gauche', animate('1000ms ease')),
      transition('droite2 => droite2', animate('1000ms ease')),
      transition('droite => actuelle', animate('1000ms ease')),
      transition('droite => gauche', animate('1000ms ease')),
      transition('droite => droite2', animate('1000ms ease')),
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
      transition('nonDebutee => terminee', animate('500ms ease'))
    ])
  ]
})
export class ProjetsComponent implements OnInit {

  @Input() initialisation!: string
  @Input() position!: string;
  mesProjets!: Projet[];

  constructor(private projetsService: ProjetsService) { }

  ngOnInit(): void {
    this.initialisation = "nonDebutee";
    this.position = "droite2";
    this.mesProjets = this.projetsService.projets;
  }
}