import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'event', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
   
    // { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
  ])],
  exports: [RouterModule]
})
export class TribeBondRoutingModule { }
