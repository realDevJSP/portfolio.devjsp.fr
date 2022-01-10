import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pageActuelle!: number;

  positionAccueil!: string;
  positionPresentation!: string;
  positionProjets!: string;
  positionContact!: string;

  initialisationAccueil!: string;
  initialisationPresentation!: string;
  initialisationProjets!: string;
  initialisationContact!: string;

  constructor() {
    this.pageActuelle = 1;
    this.positionAccueil = "actuelle";
    this.positionPresentation = "droite";
    this.positionProjets = "droite2";
    this.positionContact = "droite3";

    this.initialisationPresentation = "nonDebutee";
    this.initialisationProjets = "nonDebutee";
    this.initialisationContact = "nonDebutee";
  }

  ngOnInit(): void {

  }

  goToPage(pageDestination: number): void {
    if(pageDestination != this.pageActuelle){
      switch(this.pageActuelle){
        case 1:
          switch(pageDestination){
            case 2:
              this.positionAccueil = "gauche";
              this.positionPresentation = "actuelle";
              this.positionProjets = "droite";
              this.positionContact = "droite2";
              break;
            case 3:
              this.positionAccueil = "gauche2";
              this.positionPresentation = "gauche";
              this.positionProjets = "actuelle";
              this.positionContact = "droite";
              break;
            case 4:
              this.positionAccueil = "gauche3";
              this.positionPresentation = "gauche2";
              this.positionProjets = "gauche";
              this.positionContact = "actuelle";
              break;
            default:
              break;
          }
          break;
        case 2:
          switch(pageDestination){
            case 1:
              this.positionAccueil = "actuelle";
              this.positionPresentation = "droite";
              this.positionProjets = "droite2";
              this.positionContact = "droite3";
              break;
            case 3:
              this.positionAccueil = "gauche2";
              this.positionPresentation = "gauche";
              this.positionProjets = "actuelle";
              this.positionContact = "droite";
              break;
            case 4:
              this.positionAccueil = "gauche3";
              this.positionPresentation = "gauche2";
              this.positionProjets = "gauche";
              this.positionContact = "actuelle";
              break;
            default:
              break;
          }
          break;
        case 3:
          switch(pageDestination){
            case 1:
              this.positionAccueil = "actuelle";
              this.positionPresentation = "droite";
              this.positionProjets = "droite2";
              this.positionContact = "droite3";
              break;
            case 2:
              this.positionAccueil = "gauche";
              this.positionPresentation = "actuelle";
              this.positionProjets = "droite";
              this.positionContact = "droite2";
              break;
            case 4:
              this.positionAccueil = "gauche3";
              this.positionPresentation = "gauche2";
              this.positionProjets = "gauche";
              this.positionContact = "actuelle";
              break;
            default:
              break;
          }
          break;
        case 4:
          switch(pageDestination){
            case 1:
              this.positionAccueil = "actuelle";
              this.positionPresentation = "droite";
              this.positionProjets = "droite2";
              this.positionContact = "droite3";
              break;
            case 2:
              this.positionAccueil = "gauche";
              this.positionPresentation = "actuelle";
              this.positionProjets = "droite";
              this.positionContact = "droite2";
              break;
            case 3:
              this.positionAccueil = "gauche2";
              this.positionPresentation = "gauche";
              this.positionProjets = "actuelle";
              this.positionContact = "droite";
              break;
            default:
              break;
          }
          break;
        default:
          break
      }
    }

    this.pageActuelle = pageDestination;
    setTimeout(() => {
      this.init(pageDestination);
    }, 500);
  }

  init(numPage: number): void {
    switch(numPage){
      case 2:
        this.initialisationPresentation = "terminee";
        break;
      case 3:
        this.initialisationProjets = "terminee";
        break;
      case 4:
        this.initialisationContact = "terminee";
        break;
      default:
        break;
    }
  }
}
