import { Role } from "./Role.model";
import { Workflow } from "./Workflow.model";

export class Utilisateur{
    user_id:number;
    first_name:string;
    last_name:string;
    username:string;
    password:string;
    roles:Role[];
    workflows:Workflow[];

    constructor(){}

}
