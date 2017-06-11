import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: "events-list",
    templateUrl: 'app/events/events-list.component.html'

})
export class EventsListComponent implements OnInit {


    /*
        Interpolation: This type of data bindind is used when you want to display data on the HTML. The data to be displayed is enclosed inside a {{}} for example: <h2>{{user.firstName}}</h2>
            Any kind of expression can be used inside a {{ }} it will evaluate for say, {{2+2}} as 4
        Property Binding is used to bind a data to the HTML property of an element. The data to be bound is enclosed inside a double quote AND the property to be bound is enclosed inside [ ]. For example: <img [src]="user.imageUrl" />

        EXPRESSION RESTRICTION:
        Expressions can't use assignment operators like +=, = , ++, -= etc
        Expressions can't instantiate a new object with NEW keyword
        Expressions can't chain other expressions with a semi-colon. Expression MUST be single lined.
        Expressions can't use global variables from global namespace.

        EXPRESSION RECOMMENDATION:
        Expressions or calling an expression must not change the state of the application. It mustn't have any side effects.
        Expressions MUST be fast and simple avoiding all the business logic.
        Expressions MUST be idempotent. That is, each time you call an expression, it must return the same result.

        Event Binding in Angular:
        Events like click, hover or any other HTML user event can be bound to functions in Angular by enclosing the name of the event inside a parenthesis. For example: For an click event on <p> tag, we can have: <p (click)="someHandler()" >Some text here</p>

        Interpolation or Property binding to an undefined data will cause error. TO FIX this issue, whenever using interpolation or property binding, use ? to specify that the data is nullable for example {{user?.firstName}}. This is called SAFE NAVIGATIONAL OPERATOR.

        Another use case where an element needs to be hidden and shown frequently based on user events, we can Property Bind [hidden] to some boolean expression. For example: [hidden]="!user?.imageUrl" this has a great performance boost if we need to hide/show element frequently OVER rendering the entire DOM again and again.

        ngSwitch is switch-case directive in Angular where based on a property we can hide/show certain HTML elements. [ngSwitch]="some.Property" works on a property. Each cases of ngSwtich is denoted by *ngSwitchCase="value". Defaults are specified as *ngSwitchDefault. ngSwitch and ngSwitchCase comparision must have the same data type.

        Class Binding in Angular is a way to bind certain class when a expression is true. Class Binding is specified between [class.className]="some expression". Note that this class name has to be specified in the CSS of the component.

        In some cases where you want to apply more than one class, [ngClass] directive is used. [ngClass] takes comma separated expression inside { } where each expression corresponds to the class we want to apply. For Example: [ngClass]="{green: event?.time ==='8:00 am', orange: event?.time === '10:00 am', bold: event?.time}"
        APPROACH 2: Methods can be bound to ngClass. Whenever the logic becomes heavy like in the above case, we can move this logic to a method in the component which returns a object, string, space separated string or array of string representing the names of the class that needs to be applied when and method expression becomes truthy.
        For example: [ngClass]="getMyClass()"
        getMyClass(){
            if(this.event && this.event.time === '8:00 am')
                return ['orange','bold'];
            if(this.event && this.event.time === '10:00 am')
                return ['yellow','bold'];
            else return ['yellowgreen','bold']
        }

        Style attributes can be directly manipulated based on expressions by using [style.color]="user?.age > 10 ? 'red': 'yellow'". We can also use [ngStyle] which takes expression or a method BUT return value mustn't be class names, but rather are styles. For example: a method may return {color: '#ffa500', 'font-weight':'bold'}


        To navigate from main page to the details page we need to add routerLink to the main container of the main pages component.
        Infact to navigate to any page from the HTML add [routerLink]="['/routeName','parameter']"
     */

    event1: any; 
    constructor(private eventService: EventService, private toastr: ToastrService){
        
    }


    handleClick(name: string){
        this.toastr.info(name);
    }

    handleEventClicked(data) {
        console.log("recieved " + data);
    }

    ngOnInit() {
        this.event1 = this.eventService.getEvents();
    }
}