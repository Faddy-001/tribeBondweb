import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QserviceRoutingModule } from './qservice-routing.module';
import { QserviceComponent } from './qservice.component';


@NgModule({
  declarations: [QserviceComponent],
  imports: [
    CommonModule,
    QserviceRoutingModule
  ]
})
export class QserviceModule { }
