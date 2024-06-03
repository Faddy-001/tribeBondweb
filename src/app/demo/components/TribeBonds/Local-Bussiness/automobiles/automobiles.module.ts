import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomobilesRoutingModule } from './automobiles-routing.module';
import { AutomobilesComponent } from './automobiles.component';
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
import { AddAutomobileComponent } from './add-automobile/add-automobile.component';
import { EditAutomobileComponent } from './edit-automobile/edit-automobile.component';
import { DetailAutomobileComponent } from './detail-automobile/detail-automobile.component';


@NgModule({
	declarations: [AutomobilesComponent, AddAutomobileComponent, EditAutomobileComponent, DetailAutomobileComponent],
	imports: [
		CommonModule,
		AutomobilesRoutingModule,
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
export class AutomobilesModule { }
