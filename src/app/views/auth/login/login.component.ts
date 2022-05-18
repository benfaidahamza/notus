import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Utilisateur } from "src/app/modele/Utilisateur.model";
import { LoginService } from "src/app/services/auth/login.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  errorMessage = 'Les informations d\'identification invalides';
  user:Utilisateur;
  message: any

  constructor(private route:ActivatedRoute,private router:Router,private loginService:LoginService) {}

  ngOnInit(): void {
    this.user=new Utilisateur();
  }

  submit({value,valid}: {value:Utilisateur,valid:boolean})
  {
    console.log("1");
    this.user=value;
    console.log(this.user);
  }

  doLogin() {
    let resp = this.loginService.login(this.user.username, this.user.password);
    console.log(this.user.username);
    resp.subscribe(data => {
      this.message = data;
      console.log(this.message);
     this.router.navigate(["/admin/dashboard"])
    });
  }
}
