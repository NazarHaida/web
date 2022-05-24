import {Component} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector:"home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {



  authenticated= LoginComponent.authenticated
  url: string = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    private location: Location
  ) {
  }



  ngOnInit() {

    
  }
    logout(): void {
    this.auth.logout().subscribe({
      next: () => {
        this.authenticated = false
        this.router.navigate(['']);
      },
      error: err => {
        this.authenticated = false
      }
  })}}

