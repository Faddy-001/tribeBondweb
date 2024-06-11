import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { AddEventsComponent } from '../add-events/add-events.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { EditEventComponent } from '../edit-event/edit-event.component';
const routes: Routes = [
  {path:'',component:EventsComponent},
  {path:'add',component:AddEventsComponent},
  {path:'event-detail/:id',component:EventDetailComponent},
  {path:'event-edit/:id',component:EditEventComponent}



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }


