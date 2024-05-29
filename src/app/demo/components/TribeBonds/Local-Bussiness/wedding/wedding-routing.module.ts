import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingComponent } from './wedding.component';
import { AddWeddingComponent } from './add-wedding/add-wedding.component';
import { DetailWeddingComponent } from './detail-wedding/detail-wedding.component';
import { EditWeddingComponent } from './edit-wedding/edit-wedding.component';

const routes: Routes = [
  {path:'',component:WeddingComponent},
  {path:"add-wedding",component:AddWeddingComponent},
  {path:"edit-wedding/:id",component:EditWeddingComponent},
  {path:"detail-wedding/:id",component:DetailWeddingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
