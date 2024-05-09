import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IslamicSchoolRoutingModule } from './islamic-school-routing.module';
import { IslamicSchoolComponent } from './islamic-school.component';


@NgModule({
  declarations: [IslamicSchoolComponent],
  imports: [
    CommonModule,
    IslamicSchoolRoutingModule
  ]
})
export class IslamicSchoolModule { }
