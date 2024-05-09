import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IslamicSchoolComponent } from './islamic-school.component';

const routes: Routes = [
  { path: '', component: IslamicSchoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IslamicSchoolRoutingModule { }
