import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineTutorDetailRoutingModule } from './online-tutor-detail-routing.module';
import { OnlineTutorDetailComponent } from './online-tutor-detail.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [OnlineTutorDetailComponent],
  imports: [
    CommonModule,
    OnlineTutorDetailRoutingModule,
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
export class OnlineTutorDetailModule { }
