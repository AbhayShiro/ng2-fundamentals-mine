import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable()
/*
    This is how we wrap third party library into a service that can be used by Angular as Injectable.
    We first need to reference its css and JS files so that it is available at runtime.
    For example: In this case Toastr is a third party library we are using which exposes toastr variable which is globally accessable.
    
    To wrap a service around a third party library, declare the exposed global variable, toastr in this case globally in the file. 
    Then declare a class that will contain all the methods of the third party library that we are interested in using inside the class AND do not forget to declare the class as INJECTABLE.
    Do declare this class in the provider in the app.module.ts

    Once this is done, the wrapped service can be injected anywhere into the Angular code.
 */
export class ToastrService {

    success(message: string, title?: string) {
        toastr.success(message, title);
    }

    info(message: string, title?: string) {
        toastr.info(message, title);
    }
    error(message: string, title?: string) {
        toastr.error(message, title);
    }
    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }


}