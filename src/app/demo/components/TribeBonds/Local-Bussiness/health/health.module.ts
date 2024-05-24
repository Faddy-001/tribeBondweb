import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HennaServiceComponent } from '../henna-service/henna-service.component';
import { HealthComponent } from './health.component';


@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    HealthRoutingModule
  ]
})
export class HealthModule { }
