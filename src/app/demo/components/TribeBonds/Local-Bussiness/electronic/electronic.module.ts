import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicRoutingModule } from './electronic-routing.module';
import { ElectronicComponent } from './electronic.component';


@NgModule({
  declarations: [ElectronicComponent],
  imports: [
    CommonModule,
    ElectronicRoutingModule
  ]
})
export class ElectronicModule { }
