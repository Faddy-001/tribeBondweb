import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryComponent } from './grocery.component';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';
import { EditGroceryComponent } from './edit-grocery/edit-grocery.component';
import { DetailGroceryComponent } from './detail-grocery/detail-grocery.component';
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


@NgModule({
  declarations: [GroceryComponent,AddGroceryComponent,EditGroceryComponent,DetailGroceryComponent],
  imports: [
    CommonModule,
    GroceryRoutingModule,
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
export class GroceryModule { }
