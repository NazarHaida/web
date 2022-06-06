import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: "app_register",
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"]
})

export class RegisterComponent{

  form: FormGroup = {} as FormGroup;
   message: string;
   static authenticated2: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    public http:HttpClient,
    private router: Router

  ) { }


  ngOnInit(): void{
  this.form=this.formBuilder.group({
    nickname:"",
    lastname: "",
    firstname: "",
    email: "",
    password: ""
  })}

  onsubmit(): void{

    this.auth.register(this.form.getRawValue()).subscribe({
        next: () => {

          this.router.navigate(["/login"]);
 },
        error: err =>{

          if (err.stetus === 403) {
            alert("Error")
          }
        }

        }

    )}
}

