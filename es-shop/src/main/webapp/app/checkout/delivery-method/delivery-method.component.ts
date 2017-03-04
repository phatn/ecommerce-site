import {Component} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
/**
 * Created by phatnguyen on 2/26/17.
 */

@Component({
    selector: 'eshop-checkout-delivery-method',
    moduleId: module.id,
    templateUrl: 'delivery-method.component.html'
})
export class DeliveryMethodComponent {

    constructor(private order: Order,
                private router: Router) {}

    toPaymentMethod() {
        this.router.navigateByUrl("/checkout/payment-method");
    }

}