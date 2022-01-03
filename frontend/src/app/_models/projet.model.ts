export class Projet {

    id!: number;
    titre!: string;
    nomClient!: string;
    etat!: number;
    dateDebut!: Date;
    tags!: string[];
    description!: string;
    miniature: string;
    cheminGalerie: string;
    dateMAJ?: Date;
    dateFin?: Date;
    lienDirect?: string;
    lienGithub?: string;

    constructor(id: number,
                titre: string,
                nomClient: string,
                etat: number,
                dateDebut: Date,
                tags: string[],
                description: string,
                cheminGalerie: string,
                dateMAJ?: Date,
                dateFin?: Date,
                lienDirect?: string,
                lienGithub?: string) {
        this.id = id;
        this.titre = titre;
        this.nomClient = nomClient;
        this.etat = etat;
        this.dateDebut = dateDebut;
        this.tags = tags;
        this.description = description;
        this.dateMAJ = dateMAJ;
        this.dateFin = dateFin;
        this.lienDirect = lienDirect;
        this.lienGithub = lienGithub;
        this.miniature = cheminGalerie + "main.jpg";
        this.cheminGalerie = cheminGalerie;
    }
}