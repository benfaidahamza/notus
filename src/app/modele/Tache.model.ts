import { Etat } from "./Etat.model";

export class Tache{
    tache_id:number;
    titre:string;
    type:string;
    date_validation:Date;
    assignement:string;
    ordre:number;
    etat:Etat;

    constructor(){}
}