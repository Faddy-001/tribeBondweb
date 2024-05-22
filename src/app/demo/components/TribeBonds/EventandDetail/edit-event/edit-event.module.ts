import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventRoutingModule } from './edit-event-routing.module';
import { EditEventComponent } from './edit-event.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea'; 


@NgModule({
  declarations: [EditEventComponent],
  imports: [
    CommonModule,
    EditEventRoutingModule,
    AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		FileUploadModule,
		// FormsModule,
        ReactiveFormsModule,
		InputTextareaModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class EditEventModule { }
