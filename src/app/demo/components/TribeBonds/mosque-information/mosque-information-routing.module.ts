import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosqueInformationComponent } from './mosque-information.component';
import { AddMosqueComponent } from './add-mosque/add-mosque.component';
import { EditMosqueComponent } from './edit-mosque/edit-mosque.component';
import { DetailMosqueComponent } from './detail-mosque/detail-mosque.component';

const routes: Routes = [
  {path:"",component:MosqueInformationComponent},
  {path:"add-mos",component:AddMosqueComponent},
  {path:"edit-mos/:id",component:EditMosqueComponent},
  {path:"detail-mos/:id",component:DetailMosqueComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosqueInformationRoutingModule { }
