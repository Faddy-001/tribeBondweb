import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBlogComponent } from './home-blog.component';

const routes: Routes = [
  { path: '', component: HomeBlogComponent }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBlogRoutingModule { }
