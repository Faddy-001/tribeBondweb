import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomobilesComponent } from './automobiles.component';

const routes: Routes = [
  {path:"",component:AutomobilesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomobilesRoutingModule { }
