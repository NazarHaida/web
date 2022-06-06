import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  backendUrl = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) {
  }

  login(loginData: { email: string, password: string }) {
    return this.http.post(this.backendUrl + "/user/login", loginData)
  }

  register(regData: {
    nickname: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
  }) {
    return this.http.post(this.backendUrl + '/user/post', regData);
  }

  delete(regData: {
    nickname: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
  }) {
    return this.http.post(this.backendUrl + '/user/delete', regData);
  }

  logout() {
    return this.http.post(this.backendUrl + '/user/logout', {});
  }
  change(regData: {
    email: string,
    password: string
    nickname: string,
    firstname: string,
    lastname: string,
    newemail: string,
    newpassword: string
  }) {
    return this.http.post(this.backendUrl + '/user/change', regData);
  }
  // notes() {
  //   return this.http.get(this.backendUrl + '/notes/show', {});
  // }
  add_note(regData: {
    text: string
  }) {
    return this.http.post(this.backendUrl + '/note/add', regData);
  }
  change_note(regData: {
    text: string
    id: number
  }) {
    return this.http.post(this.backendUrl + '/note/change', regData);
  }
  delete_note(regData: {
    id: number
  }) {
    return this.http.post(this.backendUrl + '/note/delete', regData);
  }
  find_note(regData: {
    text: string
  }) {
    return this.http.post(this.backendUrl + '/note/find', regData);
  }
}
