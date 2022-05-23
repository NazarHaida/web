import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {from} from "rxjs";
import {error} from "@angular/compiler/src/util";
@Component({
  selector:"login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})


export class LoginComponent {

  form: FormGroup = {} as FormGroup;
  // static message: string= ' <strong></strong>';

  static authenticated: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}
    ngOnInit(): void{
      this.form = this.formBuilder.group({
        email: "",
        password: "",

      })
    }

  onsubmit(){

    this.auth.login(this.form.getRawValue()).subscribe({
        next: () => {
          LoginComponent.authenticated = true
          console.log(status)
          this.router.navigate(["/"])
      },
        error: err =>{
          if(err.stetus===403){
            // LoginComponent.message ="Wrong Email or Password"
          }
        }

        }

    )}
}


