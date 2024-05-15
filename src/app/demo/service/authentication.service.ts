import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, subscribeOn, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.apiURL
  login_url = this.url + 'user/login';
  signup_url = this.url + 'user/register';

  constructor(private http: HttpClient) { }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  public clear() {
    localStorage.clear();
  }
  LoginUser(user: any) {
    return this.http.post(this.login_url, user).pipe(
      tap((res: any) => {
        console.log('Login API Response:', res);
        if (res && res.success && res.data && res.data.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(res.data));
        }
      })
    );
  }
  //  signup
  SignUp(user: any) {
    return this.http.post(this.signup_url, user).pipe(map((res) => res));
  }

  // city api
  get_city = this.url + 'constants/cities';

  getCity() {
    return this.http.get(this.get_city).pipe(map((res) => res));
  }
  // Event Api
  add_event = this.url + 'events/add';
  addEvent(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
      }),
    };
    return this.http.post(this.add_event, value,httpOptions).pipe(map((res) => res));

  }
  all_event = this.url + 'events/display';
  getAllEvent() {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.all_event, httpOptions).pipe(map((res) => res));

  }
  getById_event = this.url + 'events/display/';
  getEventById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_event + id,httpOptions);
  }
  edit_event = this.url + 'events/display/';
  editEventId(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_event + '/' + id, data, httpOptions);
}}
