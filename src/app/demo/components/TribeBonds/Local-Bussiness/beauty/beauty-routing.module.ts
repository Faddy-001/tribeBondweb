import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyComponent } from './beauty.component';
import { AddBeautyComponent } from './add-beauty/add-beauty.component';
import { EditBeautyComponent } from './edit-beauty/edit-beauty.component';
import { DetailBeautyComponent } from './detail-beauty/detail-beauty.component';

const routes: Routes = [
  {path:"",component:BeautyComponent},
  { path: "add-beauty", component: AddBeautyComponent },
  { path: "edit-beauty/:id", component: EditBeautyComponent }, 
  { path: "detail-beauty/:id", component: DetailBeautyComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeautyRoutingModule { }
