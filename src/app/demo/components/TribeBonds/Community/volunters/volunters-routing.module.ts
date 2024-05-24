import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntersComponent } from './volunters.component';

const routes: Routes = [
  {path:"",component:VoluntersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntersRoutingModule { }
