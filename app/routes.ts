import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-detail/event-detail.component';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]

/*
    1. Make sure <router-outlet> is defined in the apps root component.
    2. Add routes like above.
    Once these Routes are defined we need to tell Angular to import these Routes. This is done in app.module.ts. We need to specify routes in the imports like: RouterModule.forRoot(appRoutes)
    Also we need to tell Angular where on the webserver our app is hosted. For example there will be scenarios when apps will be hosted in www.example.com/admin etc.
    For this reason, we need to specify explicitly where the app is hosted in the server. This is done by adding tag <base href="/"> in the index.html
 */

