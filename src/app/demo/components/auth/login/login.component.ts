import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { GoogleAuthService } from 'src/app/google-authentication.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'

})
export class LoginComponent {
    rememberMe: boolean = false;
    loginForm: FormGroup;
    returnUrl: string = '';
    constructor(private layoutService: LayoutService, private fb: FormBuilder,
        public router: Router,
        private auth: AuthenticationService,
        private googleAuthService: GoogleAuthService,
        private route: ActivatedRoute,
    ) {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
       
    }
    ngOnInit() {
      if(this.auth.isLoggedIn()){
        this.router.navigate(['tribe/home']);
      }
      this.route.queryParams.subscribe(params => {
        this.returnUrl = params['returnUrl'] || 'tribe/home';
      });
          
    }
  

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }
    signIn() {
        this.googleAuthService.signIn().then((data) => {
          console.log('Signed in:', data);
        }).catch((error) => {
          console.error('Sign in failed:', error);
        });
      }
    
      signOut() {
        this.googleAuthService.signOut().then(() => {
          console.log('Signed out');
        }).catch((error) => {
          console.error('Sign out failed:', error);
        });
      }

    // login
    login(userdata: any) {
        console.log("jbdsbdmbsdm");
        console.log(userdata);

        if (userdata.email != null && userdata.password != null) {
            this.auth.LoginUser(userdata).subscribe(
                (res: any) => {
                    if (res.success == true) {
                      this.auth.setToken(res.data.token);

                      // Store user data in local storage
                      localStorage.setItem('user', JSON.stringify(res.data.user));
                        // this.router.navigateByUrl('/tribe/home');
                        this.router.navigateByUrl(this.returnUrl);
                    }
                  

                    console.log(res.data.user);
                    
                }
                
            )
        }
    }

   
}
