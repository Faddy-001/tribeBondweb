import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTutorDetailComponent } from './online-tutor-detail.component';

const routes: Routes = [
  { path: '', component: OnlineTutorDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineTutorDetailRoutingModule { }
