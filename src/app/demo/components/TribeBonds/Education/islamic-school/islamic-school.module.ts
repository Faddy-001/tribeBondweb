import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IslamicSchoolRoutingModule } from './islamic-school-routing.module';
import { IslamicSchoolComponent } from './islamic-school.component';
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [IslamicSchoolComponent],
  imports: [
    CommonModule,
    IslamicSchoolRoutingModule,
    AvatarModule,
      DataViewModule,
      DropdownModule,
      ButtonModule,
      InputTextModule,
  ]
})
export class IslamicSchoolModule { }
