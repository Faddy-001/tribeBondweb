import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceTutorComponent } from './face-tutor.component';

const routes: Routes = [
  { path: '', component: FaceTutorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceTutorRoutingModule { }
