import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalalMeatComponent } from './halal-meat.component';
import { AddHalalMeatComponent } from './add-halal-meat/add-halal-meat.component';
import { EditHalalMeatComponent } from './edit-halal-meat/edit-halal-meat.component';
import { DetailHalalMeatComponent } from './detail-halal-meat/detail-halal-meat.component';

const routes: Routes = [
  {path:"",component:HalalMeatComponent},
  {path:"add-M",component:AddHalalMeatComponent},
  {path:"edit-M/:id",component:EditHalalMeatComponent},
  {path:"detail-M/:id",component:DetailHalalMeatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalalMeatRoutingModule { }
