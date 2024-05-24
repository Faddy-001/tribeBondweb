import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HennaServiceComponent } from './henna-service.component';

const routes: Routes = [
  {path:"",component:HennaServiceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HennaServiceRoutingModule { }
