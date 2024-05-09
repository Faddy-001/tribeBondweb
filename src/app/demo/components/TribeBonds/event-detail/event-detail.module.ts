import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailRoutingModule } from './event-detail-routing.module';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { EventDetailComponent } from './event-detail.component';
import { NewCommentComponent } from '../../apps/blog/blog-detail/new-comment/new-comment.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';


@NgModule({
   
    declarations: [EventDetailComponent],
  imports: [
    CommonModule,
    EventDetailRoutingModule,
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
export class EventDetailModule { }
