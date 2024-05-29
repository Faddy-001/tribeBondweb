import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './legal.component';
import { AddLegalComponent } from './add-legal/add-legal.component';
import { EditLegalComponent } from './edit-legal/edit-legal.component';
import { DetailLegalComponent } from './detail-legal/detail-legal.component';

const routes: Routes = [
  {path:"",component:LegalComponent},
  { path: "add-legal", component: AddLegalComponent },
   { path: "edit-legal/:id", component: EditLegalComponent }, 
   { path: "detail-legal/:id", component: DetailLegalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
