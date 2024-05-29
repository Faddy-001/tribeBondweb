import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';

const routes: Routes = [
  {path:"",component:DoctorComponent},
  { path: "add-doc", component: AddDoctorComponent },
   { path: "edit-doc/:id", component: EditDoctorComponent }, 
   { path: "detail-doc/:id", component: DetailDoctorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
