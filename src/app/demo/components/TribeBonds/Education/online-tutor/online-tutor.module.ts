import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineTutorRoutingModule } from './online-tutor-routing.module';
import { OnlineTutorComponent } from './online-tutor.component';
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [OnlineTutorComponent],
  imports: [
    CommonModule,
    OnlineTutorRoutingModule,
    AvatarModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class OnlineTutorModule { }
