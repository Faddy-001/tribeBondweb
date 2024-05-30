import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyModuleComponent } from './buy-module.component';
import { AddBuyComponent } from './add-buy/add-buy.component';
import { EditBuyComponent } from './edit-buy/edit-buy.component';

const routes: Routes = [
  {path:"",component:BuyModuleComponent},
  {path:"add-buy",component:AddBuyComponent},
  {path:"edit-buy",component:EditBuyComponent},


  // { path: 'add', data: { breadcrumb: 'Add Tutor' }, loadChildren: () => import('../buy-module/buy-module.module').then(m => m.BuyModuleModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyModuleRoutingModule { }
