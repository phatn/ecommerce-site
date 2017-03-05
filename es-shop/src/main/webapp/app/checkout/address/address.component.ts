import {Component} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
/**
 * Created by phatnguyen on 2/26/17.
 */

@Component({
    selector: 'eshop-checkout-address',
    moduleId: module.id,
    templateUrl: 'address.component.html'
})
export class AddressComponent {

    constructor(private order: Order,
                private router: Router) {
    }

    toDeliveryMethod() {
        this.router.navigateByUrl("/checkout/delivery-method");
    }

}