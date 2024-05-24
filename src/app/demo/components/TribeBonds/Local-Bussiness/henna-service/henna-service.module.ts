import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HennaServiceRoutingModule } from './henna-service-routing.module';
import { HennaServiceComponent } from './henna-service.component';


@NgModule({
  declarations: [HennaServiceComponent],
  imports: [
    CommonModule,
    HennaServiceRoutingModule
  ]
})
export class HennaServiceModule { }
