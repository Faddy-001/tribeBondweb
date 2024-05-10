import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorDetailComponent } from './tutor-detail.component';

const routes: Routes = [
  { path: '', component: TutorDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorDetailRoutingModule { }
