import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalComponent } from './rental.component';
import { AddRentalComponent } from './add-rental/add-rental.component';
import { EditRentalComponent } from './edit-rental/edit-rental.component';
import { DetailRentalComponent } from './detail-rental/detail-rental.component';

const routes: Routes = [
  {path:"",component:RentalComponent},
  {path:"add-rental",component:AddRentalComponent},
  {path:"edit-rental/:id",component:EditRentalComponent},
  {path:"detail-rental/:id",component:DetailRentalComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule { }
