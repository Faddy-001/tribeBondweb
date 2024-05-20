import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTutorComponent } from './online-tutor.component';

const routes: Routes = [
  { path: '', component: OnlineTutorComponent },
  { path: 'add-online-tutor', data: { breadcrumb: 'Add Online Tutor' }, loadChildren: () => import('../online-tutor/add-online-tutor/add-online-tutor.module').then(m => m.AddOnlineTutorModule) },
  { path: 'online-detail/:id', data: { breadcrumb: 'Online Tutor detail' }, loadChildren: () => import('../online-tutor/online-tutor-detail/online-tutor-detail.module').then(m => m.OnlineTutorDetailModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineTutorRoutingModule { }
