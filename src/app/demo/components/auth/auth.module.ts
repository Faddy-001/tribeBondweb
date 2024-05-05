import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthRoutingModule,
    ]
})
export class AuthModule { }
