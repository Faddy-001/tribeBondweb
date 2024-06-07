import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskHelpComponent } from './ask-help.component';
import { AddAhelpComponent } from './add-ahelp/add-ahelp.component';
import { EditAhelpComponent } from './edit-ahelp/edit-ahelp.component';
import { DetailAhelpComponent } from './detail-ahelp/detail-ahelp.component';

const routes: Routes = [
  {path:"",component:AskHelpComponent},
  {path:"add-ask",component:AddAhelpComponent},
  {path:"edit-ask/:id",component:EditAhelpComponent},
  {path:"detail-ask/:id",component:DetailAhelpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskHelpRoutingModule { }
