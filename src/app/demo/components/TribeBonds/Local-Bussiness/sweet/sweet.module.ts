import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweetRoutingModule } from './sweet-routing.module';
import { SweetComponent } from './sweet.component';


@NgModule({
  declarations: [SweetComponent],
  imports: [
    CommonModule,
    SweetRoutingModule
  ]
})
export class SweetModule { }
