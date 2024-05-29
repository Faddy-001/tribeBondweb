import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomobilesComponent } from './automobiles.component';
import { AddAutomobileComponent } from './add-automobile/add-automobile.component';
import { EditAutomobileComponent } from './edit-automobile/edit-automobile.component';
import { DetailAutomobileComponent } from './detail-automobile/detail-automobile.component';

const routes: Routes = [
  {path:"",component:AutomobilesComponent},
  { path: "add-auto", component: AddAutomobileComponent },
   { path: "edit-auto/:id", component: EditAutomobileComponent }, 
   { path: "detail-auto/:id", component: DetailAutomobileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomobilesRoutingModule { }
