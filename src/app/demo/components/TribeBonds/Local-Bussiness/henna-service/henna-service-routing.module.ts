import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HennaServiceComponent } from './henna-service.component';
import { AddHennaComponent } from './add-henna/add-henna.component';
import { EditHennaComponent } from './edit-henna/edit-henna.component';
import { DetailHennaComponent } from './detail-henna/detail-henna.component';

const routes: Routes = [
  {path:"",component:HennaServiceComponent},
  {path:"add-henna",component:AddHennaComponent},
  {path:"edit-henna/:id",component:EditHennaComponent},
  {path:"detail-henna/:id",component:DetailHennaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HennaServiceRoutingModule { }
