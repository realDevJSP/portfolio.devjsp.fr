import { Component, OnInit, Input } from '@angular/core';

import { Projet } from 'src/app/_models/projet.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  @Input() projet!: Projet;

  constructor() { }

  ngOnInit(): void {
  }
}
