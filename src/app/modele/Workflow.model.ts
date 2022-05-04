import { Tache } from "./Tache.model";

export class Workflow

{
  workflow_id:number;
  titre:string;
  statut:string;
  taches:Tache[];

  constructor(
    workflow_id:number,
    titre:string,
    statut:string,
    taches:Tache[]
  ){
      this.workflow_id=workflow_id;
      this.titre=titre;
      this.statut=statut;
      this.taches=taches;
    }
}