import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlogAppRoutingModule } from "./blog.app-routing.module";
import { EventsComponent } from "../../Tribebond/events/events.component";

@NgModule({
    declarations:[
    ],
    imports: [
        CommonModule,
        BlogAppRoutingModule
    ]
})
export class BlogAppModule { }
