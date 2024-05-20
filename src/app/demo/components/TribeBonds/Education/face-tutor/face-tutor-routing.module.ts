import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceTutorComponent } from './face-tutor.component';

const routes: Routes = [
  { path: '', component: FaceTutorComponent },
  { path: 'add-tutor', data: { breadcrumb: 'Add Tutor' }, loadChildren: () => import('../face-tutor/add-tutor/add-tutor.module').then(m => m.AddTutorModule) },
  { path: 'tutor-detail/:id', data: { breadcrumb: 'Tutor-detail' }, loadChildren: () => import('../face-tutor/tutor-detail/tutor-detail.module').then(m => m.TutorDetailModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceTutorRoutingModule { }
