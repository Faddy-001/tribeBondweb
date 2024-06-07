import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeGiveawayComponent } from './free-giveaway.component';
import { AddFreeGComponent } from './add-free-g/add-free-g.component';
import { EditFreeGComponent } from './edit-free-g/edit-free-g.component';
import { DetailFreeGComponent } from './detail-free-g/detail-free-g.component';

const routes: Routes = [
  {path:"",component:FreeGiveawayComponent},
  {path:"add-fgive",component:AddFreeGComponent},
  {path:"edit-fgive/:id",component:EditFreeGComponent},
  {path:"detail-fgive/:id",component:DetailFreeGComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeGiveawayRoutingModule { }
