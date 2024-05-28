import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCateringComponent } from './food-catering.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';

const routes: Routes = [
  {path:"",component:FoodCateringComponent},
  {path:"add-F",component:AddFoodComponent},
  {path:"edit-F/:id",component:EditFoodComponent},
  {path:"detail-F/:id",component:DetailFoodComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodCateringRoutingModule { }
