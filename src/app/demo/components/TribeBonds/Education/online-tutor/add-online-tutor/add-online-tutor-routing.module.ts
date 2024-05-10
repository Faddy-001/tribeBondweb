import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnlineTutorComponent } from './add-online-tutor.component';

const routes: Routes = [
  { path: '', component: AddOnlineTutorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOnlineTutorRoutingModule { }
