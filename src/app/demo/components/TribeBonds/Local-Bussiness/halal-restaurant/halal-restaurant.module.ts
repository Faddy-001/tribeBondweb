import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalalRestaurantRoutingModule } from './halal-restaurant-routing.module';
import { HalalRestaurantComponent } from './halal-restaurant.component';
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [HalalRestaurantComponent,AddRestaurantComponent,EditRestaurantComponent,DetailRestaurantComponent],
  imports: [
    CommonModule,
    HalalRestaurantRoutingModule,
  
    AvatarModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		FileUploadModule,
		FormsModule,
		ReactiveFormsModule,
    

		ImageModule,
		GalleriaModule,
		CarouselModule,
    RippleModule,
  ]
})
export class HalalRestaurantModule { }
