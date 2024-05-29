import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicComponent } from './electronic.component';
import { AddElectronicComponent } from './add-electronic/add-electronic.component';
import { EditElectronicComponent } from './edit-electronic/edit-electronic.component';
import { DetailElectronicComponent } from './detail-electronic/detail-electronic.component';

const routes: Routes = [
  { path: "", component: ElectronicComponent },
  { path: "add-c", component: AddElectronicComponent },
   { path: "edit-c/:id", component: EditElectronicComponent }, 
   { path: "detail-c/:id", component: DetailElectronicComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicRoutingModule { }
