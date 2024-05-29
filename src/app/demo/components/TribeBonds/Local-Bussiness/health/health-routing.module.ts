import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health.component';
import { AddHealthComponent } from './add-health/add-health.component';
import { EditHalalMeatComponent } from '../halal-meat/edit-halal-meat/edit-halal-meat.component';
import { DetailHealthComponent } from './detail-health/detail-health.component';
import { EditHealthComponent } from './edit-health/edit-health.component';

const routes: Routes = [
  {path:"",component:HealthComponent},
  { path: "add-health", component: AddHealthComponent },
  { path: "edit-health/:id", component: EditHealthComponent }, 
  { path: "detail-health/:id", component: DetailHealthComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
