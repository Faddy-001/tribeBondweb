import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    rememberMe: boolean = false;
    loginForm: FormGroup;

    constructor(private layoutService: LayoutService, private fb: FormBuilder,
        public router: Router,
    ) {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required,Validators.email]],
            password: [null, Validators.required],
        });
    }

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }

    // login
    login(value: any) {
     console.log("jbdsbdmbsdm");
     console.log(value);
     
     if(value.email != null && value.password != null  ){

         this.router.navigateByUrl('/dashboard');
     }
    }
}
