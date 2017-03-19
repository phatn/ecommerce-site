import { Component } from '@angular/core';

declare let Stripe:any;

@Component({
    selector: 'eshop-app',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {

    constructor() {
        Stripe.setPublishableKey('pk_test_TJToF2jgXB7mfpxY8MtwxR67');
    }
}
