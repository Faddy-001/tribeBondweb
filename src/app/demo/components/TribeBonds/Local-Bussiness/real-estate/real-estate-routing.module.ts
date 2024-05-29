import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './real-estate.component';
import { AddRealComponent } from './add-real/add-real.component';
import { EditRealComponent } from './edit-real/edit-real.component';
import { DetailRealComponent } from './detail-real/detail-real.component';

const routes: Routes = [
  {path:"",component:RealEstateComponent},
  {path:"add-real",component:AddRealComponent},
  {path:"edit-real/:id",component:EditRealComponent},
  {path:"detail-real/:id",component:DetailRealComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }
