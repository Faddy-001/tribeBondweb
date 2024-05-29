import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from './party.component';
import { AddPartyComponent } from './add-party/add-party.component';
import { EditPartyComponent } from './edit-party/edit-party.component';
import { DetailPartyComponent } from './detail-party/detail-party.component';

const routes: Routes = [
  {path:"",component:PartyComponent},
  {path:"add-party",component:AddPartyComponent},
  {path:"edit-party/:id",component:EditPartyComponent},
  {path:"detail-party/:id",component:DetailPartyComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
