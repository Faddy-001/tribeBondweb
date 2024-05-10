import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorComponent } from './add-tutor.component';

const routes: Routes = [
  { path: '', component: AddTutorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTutorRoutingModule { }
