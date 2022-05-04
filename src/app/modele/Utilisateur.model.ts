import { Role } from "./Role.model";
import { Workflow } from "./Workflow.model";

export class Utilisateur{
    
    user_id:number;
    first_name:string;
    last_name:string;
    cin:string;
    phone:string;
    age:string;
    email:string;
    password:string;
    adresse:string;
    roles:Role[];
    workflows:Workflow[];

    constructor(
        user_id:number,
        first_name:string,
        last_name:string,
        cin:string,
        phone:string,
        age:string,
        email:string,
        password:string,
        adresse:string,
        roles:Role[],
        workflows:Workflow[])
        {this.user_id=user_id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.cin=cin;
        this.phone=phone;
        this.age=age;
        this.email=email;
        this.password=password;
        this.adresse=adresse;
        this.roles=roles;
        this.workflows=workflows;}

}