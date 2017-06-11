import { Component } from '@angular/core';

@Component({
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    `,
    selector: 'events-app'
})

/*
    This is the top most level of the application. If you note the template of this component then you will see that there is a <navbar> which is required for navigation. But the <events-list> can be replaced by <router-outlet> component. <router-outlet> will display whichever route page the user of the application has navigated to.

    We need to configure Angular such that when user requests a particular URL, display its respective output here in the router-outlet. We do this by defining the routes.
    Routes are defined in the root of the application. This is defined in routes.ts in the root of the app folder.
*/
export class EventsAppComponent {

}