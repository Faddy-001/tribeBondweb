import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryComponent } from './grocery.component';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';
import { EditGroceryComponent } from './edit-grocery/edit-grocery.component';
import { DetailGroceryComponent } from './detail-grocery/detail-grocery.component';

const routes: Routes = [
  {path:"",component:GroceryComponent},
  {path:"add-G",component:AddGroceryComponent},
  {path:"edit-G",component:EditGroceryComponent},
  {path:"detail-G",component:DetailGroceryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule { }
