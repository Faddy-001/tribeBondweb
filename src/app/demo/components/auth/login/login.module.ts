import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { RippleModule } from 'primeng/ripple';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [LoginComponent],

    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        AppConfigModule,
        RippleModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ],
  
    })
export class LoginModule { }
