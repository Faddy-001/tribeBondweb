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
    { path: 'mosqueList', data: { breadcrumb: 'mosque' }, loadChildren: () => import('./mosque-information/mosque-information.module').then(m => m.MosqueInformationModule) },
    { path: 'BuyList', data: { breadcrumb: 'Buy' }, loadChildren: () => import('./buy-module/buy-module.module').then(m => m.BuyModuleModule) },
  //  Local Business
    { path: 'restaurantList', data: { breadcrumb: 'Reataurant' }, loadChildren: () => import('./Local-Bussiness/halal-restaurant/halal-restaurant.module').then(m => m.HalalRestaurantModule) },
    { path: 'halalMList', data: { breadcrumb: 'MeatList' }, loadChildren: () => import('./Local-Bussiness/halal-meat/halal-meat.module').then(m => m.HalalMeatModule) },
    { path: 'gList', data: { breadcrumb: 'GroceryList' }, loadChildren: () => import('./Local-Bussiness/grocery/grocery.module').then(m => m.GroceryModule) },
    { path: 'houseHoldList', data: { breadcrumb: 'houseHoldList' }, loadChildren: () => import('./Local-Bussiness/house-hold/house-hold.module').then(m => m.HouseHoldModule) },
    { path: 'foodList', data: { breadcrumb: 'FoodList' }, loadChildren: () => import('./Local-Bussiness/food-catering/food-catering.module').then(m => m.FoodCateringModule) },
    { path: 'rentalList', data: { breadcrumb: 'RentalList' }, loadChildren: () => import('./Local-Bussiness/rental/rental.module').then(m => m.RentalModule) },
    { path: 'sweetList', data: { breadcrumb: 'SweetList' }, loadChildren: () => import('./Local-Bussiness/sweet/sweet.module').then(m => m.SweetModule) },
    { path: 'weddingList', data: { breadcrumb: 'WeddingList' }, loadChildren: () => import('./Local-Bussiness/wedding/wedding.module').then(m => m.WeddingModule) },
    { path: 'cList', data: { breadcrumb: 'ComputerList' }, loadChildren: () => import('./Local-Bussiness/electronic/electronic.module').then(m => m.ElectronicModule) },
    { path: 'automobileList', data: { breadcrumb: 'AutomobileList' }, loadChildren: () => import('./Local-Bussiness/automobiles/automobiles.module').then(m => m.AutomobilesModule) },
    { path: 'legalList', data: { breadcrumb: 'LegalList' }, loadChildren: () => import('./Local-Bussiness/legal/legal.module').then(m => m.LegalModule) },
    { path: 'doctorList', data: { breadcrumb: 'DoctorList' }, loadChildren: () => import('./Local-Bussiness/doctor/doctor.module').then(m => m.DoctorModule) },
    { path: 'healthList', data: { breadcrumb: 'HealthList' }, loadChildren: () => import('./Local-Bussiness/health/health.module').then(m => m.HealthModule) },
    { path: 'qServiceList', data: { breadcrumb: 'Qurbani Service' }, loadChildren: () => import('./Local-Bussiness/qservice/qservice.module').then(m => m.QserviceModule) },
    { path: 'beautyList', data: { breadcrumb: 'Beauty Service' }, loadChildren: () => import('./Local-Bussiness/beauty/beauty.module').then(m => m.BeautyModule) },
    { path: 'realEstateList', data: { breadcrumb: 'Real Estate ' }, loadChildren: () => import('./Local-Bussiness/real-estate/real-estate.module').then(m => m.RealEstateModule) },
    { path: 'hennaList', data: { breadcrumb: 'Henna Service ' }, loadChildren: () => import('./Local-Bussiness/henna-service/henna-service.module').then(m => m.HennaServiceModule) },
    { path: 'partyList', data: { breadcrumb: 'Party Service ' }, loadChildren: () => import('./Local-Bussiness/party/party.module').then(m => m.PartyModule) },
  
    { path: 'giveawayList', data: { breadcrumb: 'Giveaway ' }, loadChildren: () => import('./Community/free-giveaway/free-giveaway.module').then(m => m.FreeGiveawayModule) },
    { path: 'askhelp', data: { breadcrumb: 'Ask Help ' }, loadChildren: () => import('./Community/ask-help/ask-help.module').then(m => m.AskHelpModule) },
    { path: 'volunter', data: { breadcrumb: 'Volunter Need' }, loadChildren: () => import('./Community/volunters/volunters.module').then(m => m.VoluntersModule) },
    { path: 'job', data: { breadcrumb: 'Job' }, loadChildren: () => import('./job/job.module').then(m => m.JobModule) },
    
    // BuyModuleComponent
    // { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
  ])],
  exports: [RouterModule]
})
export class TribeBondRoutingModule { }
