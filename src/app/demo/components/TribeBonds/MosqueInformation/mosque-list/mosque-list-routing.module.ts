import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosqueListComponent } from './mosque-list.component';

const routes: Routes = [
  { path: '', component: MosqueListComponent },
  { path: 'add-mosque', data: { breadcrumb: 'Add Mosque' }, loadChildren: () => import('../add-mosque/add-mosque.module').then(m => m.AddMosqueModule) },
  { path: 'mosque-detail', data: { breadcrumb: 'mosque-detail' }, loadChildren: () => import('../mosque-detail/mosque-detail.module').then(m => m.MosqueDetailModule) },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosqueListRoutingModule { }
