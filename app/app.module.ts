import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-detail/event-detail.component';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/events.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/events-thumbnail-component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService]
})
export class AppModule{

}