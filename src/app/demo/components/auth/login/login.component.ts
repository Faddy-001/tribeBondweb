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
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, Validators.required],
        });
    }

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }

    // login
    login(value: any) {
     console.log("jbdsbdmbsdm");
     
        this.router.navigateByUrl('/dashboard');
    }
}
