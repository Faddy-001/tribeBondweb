import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AppConfigModule } from "../../../layout/config/app.config.module";
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        AppConfigModule,
        RippleModule,
        ButtonModule,
        
        InputTextModule,
        CheckboxModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule { }
