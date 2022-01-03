import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Projet } from 'src/app/_models/projet.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  @Input() projet!: Projet;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewProjet(): void {
    this.router.navigateByUrl(`projet/${this.projet.id}`);
  }
}
