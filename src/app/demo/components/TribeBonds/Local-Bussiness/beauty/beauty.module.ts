import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeautyRoutingModule } from './beauty-routing.module';
import { BeautyComponent } from './beauty.component';


@NgModule({
  declarations: [BeautyComponent],
  imports: [
    CommonModule,
    BeautyRoutingModule
  ]
})
export class BeautyModule { }
