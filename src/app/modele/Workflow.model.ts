import { Tache } from "./Tache.model";

export class Workflow{
  workflow_id:number;
  titre:string;
  statut:string;
  taches:Tache[];

  constructor(){}
}