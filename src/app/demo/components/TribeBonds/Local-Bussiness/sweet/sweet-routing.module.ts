import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetComponent } from './sweet.component';
import { AddSweetComponent } from './add-sweet/add-sweet.component';
import { EditSweetComponent } from './edit-sweet/edit-sweet.component';
import { DetailSweetComponent } from './detail-sweet/detail-sweet.component';

const routes: Routes = [
  {path:"",component:SweetComponent},
  {path:"add-s",component:AddSweetComponent},
  {path:"edit-s/:id",component:EditSweetComponent},
  {path:"detail-s/:id",component:DetailSweetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetRoutingModule { }
