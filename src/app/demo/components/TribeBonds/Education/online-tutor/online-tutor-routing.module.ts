import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTutorComponent } from './online-tutor.component';

const routes: Routes = [
  { path: '', component: OnlineTutorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineTutorRoutingModule { }
