import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyModuleRoutingModule } from './buy-module-routing.module';
import { BuyModuleComponent } from './buy-module.component';


@NgModule({
  declarations: [BuyModuleComponent],
  imports: [
    CommonModule,
    BuyModuleRoutingModule
  ]
})
export class BuyModuleModule { }
