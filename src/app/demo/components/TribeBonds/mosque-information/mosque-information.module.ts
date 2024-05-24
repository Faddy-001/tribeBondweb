import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MosqueInformationRoutingModule } from './mosque-information-routing.module';
import { MosqueInformationComponent } from './mosque-information.component';


@NgModule({
  declarations: [MosqueInformationComponent],
  imports: [
    CommonModule,
    MosqueInformationRoutingModule
  ]
})
export class MosqueInformationModule { }
