import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskHelpRoutingModule } from './ask-help-routing.module';
import { AskHelpComponent } from './ask-help.component';


@NgModule({
  declarations: [AskHelpComponent],
  imports: [
    CommonModule,
    AskHelpRoutingModule
  ]
})
export class AskHelpModule { }
