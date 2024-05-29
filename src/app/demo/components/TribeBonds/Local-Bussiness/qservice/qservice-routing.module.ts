import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QserviceComponent } from './qservice.component';
import { AddQServiceComponent } from './add-q-service/add-q-service.component';
import { EditQServiceComponent } from './edit-q-service/edit-q-service.component';
import { DetailQServiceComponent } from './detail-q-service/detail-q-service.component';

const routes: Routes = [
  {path:"",component:QserviceComponent},
  {path:"add-qservice",component:AddQServiceComponent},
  {path:"edit-qservice/:id",component:EditQServiceComponent},
  {path:"detail-qservice/:id",component:DetailQServiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QserviceRoutingModule { }
