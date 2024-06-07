import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyModuleComponent } from './buy-module.component';
import { AddBuyComponent } from './add-buy/add-buy.component';
import { EditBuyComponent } from './edit-buy/edit-buy.component';
import { DetailBuyComponent } from './detail-buy/detail-buy.component';

const routes: Routes = [
  {path:"",component:BuyModuleComponent},
  {path:"add-buy",component:AddBuyComponent},
  {path:"edit-buy/:id",component:EditBuyComponent},
  {path:"detail-buy/:id",component:DetailBuyComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyModuleRoutingModule { }
