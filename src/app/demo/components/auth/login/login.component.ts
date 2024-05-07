import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
// import { SocialUser } from "@abacritt/angularx-social-login";
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './login.component.html',

})
export class LoginComponent {
    // SocialAuthService = inject(SocialAuthService)
    rememberMe: boolean = false;
    loginForm: FormGroup;
    user: SocialUser | any;
    loggedIn: boolean | any;
    constructor(private layoutService: LayoutService, private fb: FormBuilder,
        public router: Router,
        private auth: AuthenticationService,
        private authService: SocialAuthService
    ) {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }
    ngOnInit() {
       
            this.authService.authState.subscribe((user) => {
              this.user = user;
              this.loggedIn = (user != null);
            });
    }
    // signInWithGoogle(): void {
    //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //       .then(user => {
    //         this.user = user;
    //         this.loggedIn = true;
    //       })
    //       .catch(error => {
    //         console.log('Error signing in with Google:', error);
    //       });
    //   }

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }

    // login
    login(userdata: any) {
        console.log("jbdsbdmbsdm");
        console.log(userdata);

        if (userdata.email != null && userdata.password != null) {
            this.auth.LoginUser(userdata).subscribe(
                (res: any) => {
                    if (res.success == true) {
                        this.router.navigateByUrl('/dashboard');
                    }
                }
            )
        }
    }
}
