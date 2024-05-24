import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskHelpComponent } from './ask-help.component';

const routes: Routes = [
  {path:"",component:AskHelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskHelpRoutingModule { }
