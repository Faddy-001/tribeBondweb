import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        // ToastrModule.forRoot({
        //     positionClass: 'toast-top-right' // You can also use 'toast-top-full-width', 'toast-top-left', etc.
        //   })
        // ToastrModule.forRoot({
        //     positionClass: 'toast-top-right', // Change this to 'toast-top-full-width' if you want it to span the entire top width
        //     preventDuplicates: true, // Prevent duplicate toasts
        //     timeOut: 3000 // Adjust the timeOut value if needed
        //   }),
        ToastrModule.forRoot({
            positionClass: 'toast-top-right', // Position of the toast
            preventDuplicates: true, // Prevent duplicate toasts
            timeOut: 3000 // Adjust the timeOut value if needed
          }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
