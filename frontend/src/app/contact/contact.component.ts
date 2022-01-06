import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { ContactService } from '../_services/contact.service';

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

  @Input() initialisation!: string;
  @Input() position!: string;

  FormData!: FormGroup;

  constructor(private contactService: ContactService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.initialisation = "nonDebutee";
    this.position = "droite";
    this.FormData = this.builder.group({
      nomComplet: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

  envoyerMail(mail: any): void {
    console.log(this.contactService.PostMessage(mail));
  }
}