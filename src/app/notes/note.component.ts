import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";
import {endWith, range} from "rxjs";
import {getInterpolationArgsLength} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "app_register",
  templateUrl: "note.component.html",
  styleUrls: ["./note.component.scss"]

})

export class NoteComponent{

   form: FormGroup = {} as FormGroup;
   form2: FormGroup = {} as FormGroup;
   response:any;
   show_add=false
   show_change=false
   show_find=false
   constructor(
     private formBuilder: FormBuilder,
     private http: HttpClient,
     private auth: AuthService,
     private router: Router
               ){}

  ngOnInit(): void{
  this.form=this.formBuilder.group({
    text: "",
    id: ""
  }),
    this.form2=this.formBuilder.group({
    text:""
    }
  )}
   show(){

     this.http.get("http://127.0.0.1:5000/notes/show").subscribe((response)=>{
       this.response=response

       console.log(this.response);
     })
   }

   add(){

    this.auth.add_note(this.form.getRawValue()).subscribe({
        next: () => {
          this.show_add=false
 },
        error: err =>{
          if (err.status === 403) {
           alert("Error, Empty Note");
          }
        }}
    )}

  add_show(){
     this.show_add= true
     this.show_change=false
    return this.show_add
  }
  change_show(){
     this.show_change=true
      this.show_add=false
    return this.show_change
  }
  find_show(){
     this.show_find=true
     return this.show_find
  }
  change(){

    this.auth.change_note(this.form.getRawValue()).subscribe({
        error: err =>{
          if (err.status === 403) {
           alert("Error, Empty Note or Wrong Note Number")
          }
        }}
    )}

  delete(){

    this.auth.delete_note(this.form.getRawValue()).subscribe({
        next: () => {
          // this.show_change=false
 },
        error: err =>{
          if (err.status === 403) {
           alert("Error, Empty Note or Wrong Note Number")
          }
        }}
    )}

  find(){

    this.auth.find_note(this.form2.getRawValue()).subscribe((response)=>{
         this.response=response
         console.log(response)}
    )}
}



