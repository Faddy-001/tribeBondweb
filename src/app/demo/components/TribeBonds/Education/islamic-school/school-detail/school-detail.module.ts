import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolDetailRoutingModule } from './school-detail-routing.module';
import { SchoolDetailComponent } from './school-detail.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [SchoolDetailComponent],
  imports: [
    CommonModule,
    SchoolDetailRoutingModule,
    ButtonModule,
		ImageModule,
		GalleriaModule,
		CarouselModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SchoolDetailModule { }
