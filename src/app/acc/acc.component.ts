import {Component} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:"acc",
  templateUrl: "./acc.component.html",
  styleUrls: ["./acc.component.scss"]
})

export class AccComponent {

  form: FormGroup = {} as FormGroup;
  // static message: string= ' <strong></strong>';


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
        nickname: "",
        lastname:"",
        firstname:"",
        newemail: "",
        newpassword:""

      })
    }

  onsubmit(){

    this.auth.delete(this.form.getRawValue()).subscribe({
        next: () => {
          LoginComponent.authenticated = false
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

  onsubmit2(){

    this.auth.change(this.form.getRawValue()).subscribe({
        next: () => {

          console.log(status)

      },
        error: err =>{
          if(err.stetus===403){
            // LoginComponent.message ="Wrong Email or Password"
          }
        }

        }

    )}
}
