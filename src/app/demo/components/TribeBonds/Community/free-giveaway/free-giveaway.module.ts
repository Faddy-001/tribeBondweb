import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeGiveawayRoutingModule } from './free-giveaway-routing.module';
import { FreeGiveawayComponent } from './free-giveaway.component';
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
import { AddFreeGComponent } from './add-free-g/add-free-g.component';
import { EditFreeGComponent } from './edit-free-g/edit-free-g.component';
import { DetailFreeGComponent } from './detail-free-g/detail-free-g.component';

@NgModule({
  declarations: [FreeGiveawayComponent,AddFreeGComponent,EditFreeGComponent,DetailFreeGComponent],
  imports: [
    CommonModule,
    FreeGiveawayRoutingModule,
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
export class FreeGiveawayModule { }
