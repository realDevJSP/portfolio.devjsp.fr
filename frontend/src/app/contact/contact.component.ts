import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('position', [
      state('actuelle', style({
        'transform': 'translateX(0%)'
      })),
      state('droite', style({
        'transform': 'translateX(150%)',
      })),
      state('droite2', style({
        'transform': 'translateX(300%)'
      })),
      state('droite3', style({
        'transform': 'translateX(450%)'
      })),
      transition('actuelle => droite', animate('1000ms ease')),
      transition('actuelle => droite2', animate('1000ms ease')),
      transition('actuelle => droite3', animate('1000ms ease')),
      transition('droite => actuelle', animate('1000ms ease')),
      transition('droite => droite2', animate('1000ms ease')),
      transition('droite => droite3', animate('1000ms ease')),
      transition('droite2 => actuelle', animate('1000ms ease')),
      transition('droite2 => droite', animate('1000ms ease')),
      transition('droite2 => droite3', animate('1000ms ease')),
      transition('droite3 => actuelle', animate('1000ms ease')),
      transition('droite3 => droite', animate('1000ms ease')),
      transition('droite3 => gauche2', animate('1000ms ease')),
    ])
  ]
})
export class ContactComponent implements OnInit {

  @Input() position!: string;

  constructor() { }

  ngOnInit(): void {
    this.position = "droite";
  }

}