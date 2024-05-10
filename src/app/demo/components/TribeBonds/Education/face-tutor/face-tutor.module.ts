import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceTutorRoutingModule } from './face-tutor-routing.module';
import { FaceTutorComponent } from './face-tutor.component';
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [FaceTutorComponent],
  imports: [
    CommonModule,
    FaceTutorRoutingModule,
    AvatarModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class FaceTutorModule { }
