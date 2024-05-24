import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetComponent } from './sweet.component';

const routes: Routes = [
  {path:"",component:SweetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetRoutingModule { }
