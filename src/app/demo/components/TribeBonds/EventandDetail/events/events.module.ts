// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DataViewModule } from 'primeng/dataview';

// import { EventsRoutingModule } from './events-routing.module';

// import { AvatarModule } from 'primeng/avatar';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { InputTextModule } from 'primeng/inputtext';
// import { DropdownModule } from 'primeng/dropdown';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     EventsRoutingModule,
//     FormsModule,
//     AvatarModule,
//     DropdownModule,
//     ButtonModule,
//     InputTextModule,
//     DataViewModule
//   ],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add CUSTOM_ELEMENTS_SCHEMA here
// })
// export class EventsModule { }
import { CommonModule, } from "@angular/common";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      AvatarModule,
      DataViewModule,
      DropdownModule,
      ButtonModule,
      InputTextModule,
      EventsRoutingModule
    ],
    declarations: [EventsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] 
  })
  export class EventsModule { }
