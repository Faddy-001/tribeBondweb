import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppConfig, LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

    config!: AppConfig;

    subscription: any;
    user:any
    firstName:any
    lastName:any
    userDataString:any
    profilePicture:any
    constructor(public layoutService: LayoutService, public el: ElementRef,private router: Router,) {
        this.subscription = this.layoutService.configUpdate$.subscribe(
            (config) => {
                this.config = config;
            }
        );
        console.log(localStorage.getItem('user'));
        this.userDataString = localStorage.getItem('user');
       this.user = JSON.parse(this.userDataString);
       this.profilePicture = this.user.profilePicture
       this.firstName = this.user.firstName
       this.lastName = this.user.lastName

       console.log(this.profilePicture);
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }
    logout() {
        console.log('vdsvndvbsnd');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('currentUser');
        this.router.navigate([`/login`]);
    }
}
