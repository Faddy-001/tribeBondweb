import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'home', data: { breadcrumb: 'home' }, loadChildren: () => import('./HomeBlog/home-blog/home-blog.module').then(m => m.HomeBlogModule) },

    { path: 'event', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./EventandDetail/events/events.module').then(m => m.EventsModule) },
    { path: 'iSchool/:id', data: { breadcrumb: 'Islamic School' }, loadChildren: () => import('./Education/islamic-school/islamic-school.module').then(m => m.IslamicSchoolModule) },
    { path: 'onlinetutor/:id', data: { breadcrumb: 'Online Tutor' }, loadChildren: () => import('./Education/online-tutor/online-tutor.module').then(m => m.OnlineTutorModule) },
    { path: 'facetutor/:id', data: { breadcrumb: 'Face Tutor' }, loadChildren: () => import('./Education/face-tutor/face-tutor.module').then(m => m.FaceTutorModule) },
    { path: 'mosqueList', data: { breadcrumb: 'mosque' }, loadChildren: () => import('./Education/face-tutor/face-tutor.module').then(m => m.FaceTutorModule) },
    { path: 'BuyList', data: { breadcrumb: 'Buy' }, loadChildren: () => import('./buy-module/buy-module.module').then(m => m.BuyModuleModule) },
  //  Local Business
    { path: 'restaurantList', data: { breadcrumb: 'Reataurant' }, loadChildren: () => import('./Local-Bussiness/halal-restaurant/halal-restaurant.module').then(m => m.HalalRestaurantModule) },
    { path: 'halalMList', data: { breadcrumb: 'MeatList' }, loadChildren: () => import('./Local-Bussiness/halal-meat/halal-meat.module').then(m => m.HalalMeatModule) },
    { path: 'gList', data: { breadcrumb: 'GroceryList' }, loadChildren: () => import('./Local-Bussiness/grocery/grocery.module').then(m => m.GroceryModule) },
    { path: 'houseHoldList', data: { breadcrumb: 'houseHoldList' }, loadChildren: () => import('./Local-Bussiness/house-hold/house-hold.module').then(m => m.HouseHoldModule) },
    { path: 'foodList', data: { breadcrumb: 'FoodList' }, loadChildren: () => import('./Local-Bussiness/food-catering/food-catering.module').then(m => m.FoodCateringModule) },
   
    // BuyModuleComponent
    // { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
  ])],
  exports: [RouterModule]
})
export class TribeBondRoutingModule { }
