import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalalRestaurantComponent } from './halal-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';

const routes: Routes = [
  {path:"",component:HalalRestaurantComponent},
  {path:"add-restaurant",component:AddRestaurantComponent},
  {path:"edit-restaurant/:id",component:EditRestaurantComponent},
  {path:"detail-restaurant/:id",component:DetailRestaurantComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalalRestaurantRoutingModule { }
