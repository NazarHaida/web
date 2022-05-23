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
}
