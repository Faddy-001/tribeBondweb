import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job.component';
import { AddJobComponent } from './add-job/add-job.component';
import { DetailJobComponent } from './detail-job/detail-job.component';

const routes: Routes = [
  {path:'',component:JobComponent},
  {path:'add-job',component:AddJobComponent},
  {path:'detail-job/:id',component:DetailJobComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
