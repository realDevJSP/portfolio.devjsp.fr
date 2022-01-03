import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Projet } from '../_models/projet.model';

@Injectable({
    providedIn: 'root'
})
export class ProjetsService {

    readonly ROOT_URL;

    projets!: Projet[];

    id!: number;
    titre!: string;
    nomClient!: string;
    etat!: number;
    dateDebut!: Date;
    tags!: string[];
    description!: string;
    cheminGalerie!: string;
    dateMAJ?: Date;
    dateFin?: Date;
    lienDirect?: string;
    lienGithub?: string;

    constructor(private http: HttpClient) {
        this.ROOT_URL = "http://devjsp.org:3000";
        this.projets = [];
        this.getProjets();
    }

    get(uri: string) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }

    post(uri: string, payload: Object) {
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }

    patch(uri: string, payload: Object) {
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    }

    delete(uri: string) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }

    getProjet(id: number) {
        const result = this.http.get("http://devjsp.org:3000/projets/" + `${id}`)
            .pipe(first())
            .toPromise()
            .then((response: any) => {
                this.id,
                this.titre,
                this.nomClient,
                this.etat,
                this.dateDebut,
                this.tags,
                this.description,
                this.cheminGalerie,
                this.dateMAJ,
                this.dateFin,
                this.lienDirect,
                this.lienGithub
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    getProjets() {
        this.projets = [];
        const result = this.http.get("http://devjsp.org:3000/projets")
            .pipe(first())
            .toPromise()
            .then((response: any) => {
                response.forEach((element: any) => {
                    this.projets.push(new Projet(
                        element.id,
                        element.titre,
                        element.nom_client,
                        element.etat,
                        element.date_debut,
                        element.tags,
                        element.description,
                        element.chemin_galerie,
                        element.date_maj,
                        element.date_fin,
                        element.lien_direct,
                        element.lien_github
                    ));
                });
            })
            .catch((err: any) => {
                console.log(err);
            });
    }
}