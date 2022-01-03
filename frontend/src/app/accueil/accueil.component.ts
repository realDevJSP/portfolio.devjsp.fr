import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  nom!: string;
  prenom!: string;
  titre!: string;

  constructor() { }

  ngOnInit(): void {
    this.nom = "Julien Salgueiro Pereira";
    this.titre = "Développeur Indépendant";
  }
}
