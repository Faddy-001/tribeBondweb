import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { AddEventsComponent } from '../add-events/add-events.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: EventsComponent },
    { path: 'add', data: { breadcrumb: 'Add Event' }, loadChildren: () => import('../add-events/add-events.module').then(m => m.AddEventsModule) },
    { path: 'event-detail/:id', data: { breadcrumb: 'event-detail' }, loadChildren: () => import('../event-detail/event-detail.module').then(m => m.EventDetailModule) },
    { path: 'event-edit/:id', data: { breadcrumb: 'event-detail' }, loadChildren: () => import('../edit-event/edit-event.module').then(m => m.EditEventModule) },
      
  ])],
  exports: [RouterModule]
})
export class EventsRoutingModule { }


