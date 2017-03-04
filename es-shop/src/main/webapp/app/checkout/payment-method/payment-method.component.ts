import {Component} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
/**
 * Created by phatnguyen on 2/26/17.
 */

@Component({
    selector: 'eshop-checkout-payment-method',
    moduleId: module.id,
    templateUrl: 'payment-method.component.html'
})
export class PaymentMethodComponent {

    constructor(private order: Order,
                private router: Router) {}

    toOrderReview() {
        this.router.navigateByUrl("/checkout/order-review")
    }
}