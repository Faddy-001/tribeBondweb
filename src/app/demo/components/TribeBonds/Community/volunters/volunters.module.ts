import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntersRoutingModule } from './volunters-routing.module';
import { VoluntersComponent } from './volunters.component';


@NgModule({
  declarations: [VoluntersComponent],
  imports: [
    CommonModule,
    VoluntersRoutingModule
  ]
})
export class VoluntersModule { }
