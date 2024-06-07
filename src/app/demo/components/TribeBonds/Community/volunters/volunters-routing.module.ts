import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntersComponent } from './volunters.component';
import { AddVolunterComponent } from './add-volunter/add-volunter.component';
import { EditVolunterComponent } from './edit-volunter/edit-volunter.component';
import { DetailVolunterComponent } from './detail-volunter/detail-volunter.component';

const routes: Routes = [
  {path:"",component:VoluntersComponent},
  {path:"add-volunter",component:AddVolunterComponent},
  {path:"edit-volunter/:id",component:EditVolunterComponent},
  {path:"detail-volunter/:id",component:DetailVolunterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntersRoutingModule { }
