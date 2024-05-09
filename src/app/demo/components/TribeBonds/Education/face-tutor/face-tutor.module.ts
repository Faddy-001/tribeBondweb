import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceTutorRoutingModule } from './face-tutor-routing.module';
import { FaceTutorComponent } from './face-tutor.component';


@NgModule({
  declarations: [FaceTutorComponent],
  imports: [
    CommonModule,
    FaceTutorRoutingModule
  ]
})
export class FaceTutorModule { }
