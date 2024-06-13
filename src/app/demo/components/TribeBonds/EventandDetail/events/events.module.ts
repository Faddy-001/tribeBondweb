
import { CommonModule, } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { FileUploadModule } from "primeng/fileupload";

import { ImageModule } from "primeng/image";
import { GalleriaModule } from "primeng/galleria";
import { CarouselModule } from "primeng/carousel";
import { RippleModule } from "primeng/ripple";
import { AddEventsComponent } from "../add-events/add-events.component";
import { EditEventComponent } from "../edit-event/edit-event.component";
import { EventDetailComponent } from "../event-detail/event-detail.component";
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [EventsComponent, AddEventsComponent, EditEventComponent, EventDetailComponent],

  imports: [
    CommonModule,
    AvatarModule,
    DataViewModule,
    ButtonModule,
    EventsRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    ImageModule,
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
    ToastModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class EventsModule { }
