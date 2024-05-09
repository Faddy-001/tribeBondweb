import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventsComponent } from './add-events.component';






@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AddEventsComponent }

        // { path: 'add-events', data: { breadcrumb: 'Add Events' }, loadChildren: () => import('./add-events.module').then(m => m.AddEventsModule) },


    ])],
    exports: [RouterModule]
})
export class AddEventsRouting { }


