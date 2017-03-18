import {Component} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
import {Card} from "../shared/card.model";
/**
 * Created by phatnguyen on 2/26/17.
 */

@Component({
    selector: 'eshop-checkout-payment-method',
    moduleId: module.id,
    templateUrl: 'payment-method.component.html'
})
export class PaymentMethodComponent {

    card: Card = new Card();

    constructor(private order: Order,
                private router: Router) {}

    toOrderReview() {
        this.order.card = this.card;
        this.router.navigateByUrl("/checkout/order-review")
    }

}