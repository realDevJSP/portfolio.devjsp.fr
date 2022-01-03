import { Component, OnInit } from '@angular/core';

import { Projet } from '../_models/projet.model';

import { ProjetsService } from '../_services/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  mesProjets!: Projet[];

  constructor(private projetsService: ProjetsService) { }

  ngOnInit(): void {
    this.mesProjets = this.projetsService.projets;
  }
}