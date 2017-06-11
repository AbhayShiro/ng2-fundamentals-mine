import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/events.service';
import { Component, OnInit } from '@angular/core';

// /events/1
@Component({
    templateUrl: 'app/events/event-detail/event-detail.component.html',
    styles: [`
        .container{
            padding-left: 20px;
            padding-right: 20px;
        }
        .event-image{
            height: 100px;
        }
    `]
})
export class EventDetailsComponent implements OnInit {

    event: any;

    //Note that ActivatedRoute is used to get the query string parameters of the URL. Note that the name of the parameter that we try to access here MUST be same as that of what we declare in the route.
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(+id);
    }
}