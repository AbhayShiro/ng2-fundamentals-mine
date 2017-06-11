import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getMyClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}} 
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late start)</span>
            <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div>Price: \$ {{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online Url: {{event?.onlineUrl}}
        </div>
     <!--<button class="btn btn-primary" (click)="handleClickMe()">Click me</button>-->
    </div>
    `,
    selector: "event-thumbnail",
    styles: [`
        .orange{ color: #ffa500 !important;}
        .yellow{ color: yellow !important;}
        .yellowgreen{ color: yellowgreen !important;}
        .bold{ font-weight: bold;}
        .thumbnail{ min-height: 210px;}
        .pad-left{margin-left: 3px;}
        .well div{color: #bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any; //This is how the event is passed into this component from the events-list component. Declaring anything as @Input() helps. Look at the above template, the input (event) properties are being displayed. To pass data into this component, simply declare the selector of this component and pass data inside like <event-thumbnail [event]="data"></event-thumbnail>

    /*
    @Input() component is often used when constructing a child component when we need to pass the data into the child component.
    @Output() component is used within the child component so that the parent can recieve some response when events (like click etc) occurs in a child component.
    */

    //@Output() eventClick = new EventEmitter();

    handleClickMe() {
        //Whenever the event(click) occurs we can use the EventEmitter to let the parent component(or whoever is listening) that this event has occured
        //We can also pass some data with the EventEmitter
        //In the parent component's html, to recieve the EventEmitter, we should declare [eventClick]="SomeName($event)" Note that the [nameInsideThis] must match the event emitter name declared in the child component, eventClick in this case.
        //Only single value can be passed through an event emitter.
        //To pass multiple values, wrap it inside a object and send over the object.

        //this.eventClick.emit(this.event.name);
    }

    getMyClass() {
        if (this.event && this.event.time === '8:00 am')
            return ['orange', 'bold'];
        if (this.event && this.event.time === '10:00 am')
            return ['yellow', 'bold'];
        else return ['yellowgreen', 'bold']
    }
}