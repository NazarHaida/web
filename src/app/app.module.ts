import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component"
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AccComponent} from "./acc/acc.component";

const appRoutes: Routes =[
  {path: "", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: "acc",component:AccComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
