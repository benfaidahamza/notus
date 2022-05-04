import { Etat } from "./Etat.model";

export class Tache
{
    tache_id:number;
    titre:string;
    type:string;
    date_validation:Date;
    assignement:string;
    ordre:number;
    etat:Etat;

    constructor(
        tache_id:number,
        titre:string,
        type:string,
        date_validation:Date,
        assignement:string,
        ordre:number,
        etat:Etat
    ){
        this.tache_id=tache_id;
        this.titre=titre;
        this.type=type;
        this.date_validation=date_validation;
        this.assignement=assignement;
        this.ordre=ordre;
        this.etat=etat;
     }
}