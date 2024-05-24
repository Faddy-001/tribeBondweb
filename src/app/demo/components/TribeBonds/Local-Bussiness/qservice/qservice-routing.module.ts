import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QserviceComponent } from './qservice.component';

const routes: Routes = [
  {path:"",component:QserviceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QserviceRoutingModule { }
