import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'event', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./EventandDetail/events/events.module').then(m => m.EventsModule) },
    { path: 'iSchool', data: { breadcrumb: 'Islamic School' }, loadChildren: () => import('./Education/islamic-school/islamic-school.module').then(m => m.IslamicSchoolModule) },
    { path: 'onlinetutor', data: { breadcrumb: 'Online Tutor' }, loadChildren: () => import('./Education/online-tutor/online-tutor.module').then(m => m.OnlineTutorModule) },
    { path: 'facetutor', data: { breadcrumb: 'Face Tutor' }, loadChildren: () => import('./Education/face-tutor/face-tutor.module').then(m => m.FaceTutorModule) },
    { path: 'mosqueList', data: { breadcrumb: 'mosque' }, loadChildren: () => import('./Education/face-tutor/face-tutor.module').then(m => m.FaceTutorModule) },
   
    // { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
  ])],
  exports: [RouterModule]
})
export class TribeBondRoutingModule { }
