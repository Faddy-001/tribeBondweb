import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosqueInformationComponent } from './mosque-information.component';

const routes: Routes = [
  {path:"",component:MosqueInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosqueInformationRoutingModule { }
