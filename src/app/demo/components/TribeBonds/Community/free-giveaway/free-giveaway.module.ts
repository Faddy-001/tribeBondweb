import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeGiveawayRoutingModule } from './free-giveaway-routing.module';
import { FreeGiveawayComponent } from './free-giveaway.component';


@NgModule({
  declarations: [FreeGiveawayComponent],
  imports: [
    CommonModule,
    FreeGiveawayRoutingModule
  ]
})
export class FreeGiveawayModule { }
