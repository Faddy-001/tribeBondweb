import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalalMeatRoutingModule } from './halal-meat-routing.module';
import { HalalMeatComponent } from './halal-meat.component';
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
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { AddHalalMeatComponent } from './add-halal-meat/add-halal-meat.component';
import { EditHalalMeatComponent } from './edit-halal-meat/edit-halal-meat.component';
import { DetailHalalMeatComponent } from './detail-halal-meat/detail-halal-meat.component';


@NgModule({
  declarations: [HalalMeatComponent,AddHalalMeatComponent,EditHalalMeatComponent,DetailHalalMeatComponent],
  imports: [
    CommonModule,
    HalalMeatRoutingModule,
    
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
export class HalalMeatModule { }
