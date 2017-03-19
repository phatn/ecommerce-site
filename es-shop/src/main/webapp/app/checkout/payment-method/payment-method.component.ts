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
    templateUrl: 'payment-method.component.html',
    styleUrls: ['payment-method.component.css']
})
export class PaymentMethodComponent {

    card: Card = new Card();


    constructor(private order: Order,
                private router: Router) {}

    toOrderReview() {
        if (!this.enableToOrderReview()) {
            alert("Please choose payment method or fill out the card payment detail");
        } else {
            this.order.card = this.card;
            this.router.navigateByUrl("/checkout/order-review")
        }
    }

    enableToOrderReview(): boolean {

        if(!this.order.paymentMethod) {
            return false;
        }

        if(this.order.paymentMethod != 'PAYMENT_GATEWAY') {
            return true;
        } else if(this.card.holderName.trim() != ''
            && this.card.cardNumber.trim() != '' && this.card.cvc.trim() != ''
            && this.card.expiryMonth.trim() != '' && this.card.expiryYear.trim() != '') {
            return true;
        }
        return false;
    }
}