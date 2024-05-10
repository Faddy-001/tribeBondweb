import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IslamicSchoolComponent } from './islamic-school.component';

const routes: Routes = [
  { path: '', component: IslamicSchoolComponent },
  { path: 'add-school', data: { breadcrumb: 'Add School' }, loadChildren: () => import('../islamic-school/add-school/add-school.module').then(m => m.AddSchoolModule) },
  { path: 'school-detail', data: { breadcrumb: 'School-detail' }, loadChildren: () => import('../islamic-school/school-detail/school-detail.module').then(m => m.SchoolDetailModule) },
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IslamicSchoolRoutingModule { }
