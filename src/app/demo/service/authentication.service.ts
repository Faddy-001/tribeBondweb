import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, subscribeOn, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url =  environment.apiURL
  login_url = this.url + 'login';
  signup_url = this.url + 'register';
  constructor(private http: HttpClient) { }
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
  // LoginUser(user: any) {
  //   return this.http.post(this.login_url, user).pipe(map((res) => res));
  // }
  SignUp(user: any) {
    return this.http.post(this.signup_url, user).pipe(map((res) => res));
  }
}
