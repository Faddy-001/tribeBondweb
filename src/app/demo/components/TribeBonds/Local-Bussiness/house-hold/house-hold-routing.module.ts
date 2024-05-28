import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseHoldComponent } from './house-hold.component';
import { AddHouseholdComponent } from './add-household/add-household.component';
import { EditHouseholdComponent } from './edit-household/edit-household.component';
import { DetailHouseholdComponent } from './detail-household/detail-household.component';

const routes: Routes = [
  {path:"",component:HouseHoldComponent},
  {path:"add-hold",component:AddHouseholdComponent},
  {path:"edit-hold/:id",component:EditHouseholdComponent},
  {path:"detail-hold/:id",component:DetailHouseholdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseHoldRoutingModule { }
