import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineTutorRoutingModule } from './online-tutor-routing.module';
import { OnlineTutorComponent } from './online-tutor.component';


@NgModule({
  declarations: [OnlineTutorComponent],
  imports: [
    CommonModule,
    OnlineTutorRoutingModule
  ]
})
export class OnlineTutorModule { }
