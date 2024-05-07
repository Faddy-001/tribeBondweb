import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private auth2: any;

  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1004730370568-j12cqb97dernbjjainklfr1b2d2q8sgb.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
    });
  }

  signIn() {
    return new Promise((resolve, reject) => {
      this.auth2.signIn().then((googleUser: any) => {
        const profile = googleUser.getBasicProfile();
        const token = googleUser.getAuthResponse().id_token;
        resolve({ profile, token });
      }).catch((error: any) => {
        reject(error);
      });
    });
  }

  signOut() {
    return new Promise<void>((resolve, reject) => {
      this.auth2.signOut().then(() => {
        resolve();
      }).catch((error: any) => {
        reject(error);
      });
    });
  }
}
