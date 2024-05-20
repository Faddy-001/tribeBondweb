import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorDetailRoutingModule } from './tutor-detail-routing.module';
import { TutorDetailComponent } from './tutor-detail.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TutorDetailComponent],
  imports: [
    CommonModule,
    TutorDetailRoutingModule,
    ButtonModule,
		ImageModule,
		GalleriaModule,
		CarouselModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class TutorDetailModule { }
