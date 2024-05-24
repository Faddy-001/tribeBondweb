import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomobilesRoutingModule } from './automobiles-routing.module';
import { AutomobilesComponent } from './automobiles.component';


@NgModule({
  declarations: [AutomobilesComponent],
  imports: [
    CommonModule,
    AutomobilesRoutingModule
  ]
})
export class AutomobilesModule { }
