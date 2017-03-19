import {Component, NgZone} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
import {Cart} from "../../cart/shared/cart.model";
import {CheckoutService} from "../shared/checkout.service";
import {OrderLine} from "../shared/order-line.model";
import {ChargeInfo} from "../shared/charge-info.model";
/**
 * Created by phatnguyen on 2/26/17.
 */

@Component({
    selector: 'eshop-checkout-order-review',
    moduleId: module.id,
    templateUrl: 'order-review.component.html'
})
export class OrderReviewComponent {

    constructor(private order: Order,
                private router: Router,
                private cart: Cart,
                private zone: NgZone,
                private checkoutService: CheckoutService) {}

    placeOrder() {

        let orderLines: OrderLine[] = [];
        for(let line of this.cart.lines) {
            orderLines.push(new OrderLine(line.product, line.quantity));
        }

        this.order.orderLines = orderLines;

        this.checkoutService.placeOrder(this.order).subscribe(
            body => {
                if(body.data == true) {
                    this.processPayment();
                }
            },error => {
                alert('Problem place order');
            }
        );
    }

    processPayment() {
        if(this.order.paymentMethod == 'PAYMENT_GATEWAY') {
            this.getToken();
        } else {
            this.gotoOrderConfirm();
        }
    }

    getToken() {

        (<any>window).Stripe.card.createToken({
            number: this.order.card.cardNumber,
            exp_month: this.order.card.expiryMonth,
            exp_year: this.order.card.expiryYear,
            cvc: this.order.card.cvc
        }, (status: number, response: any) => {

            // Wrapping inside the Angular zone
            this.zone.run(() => {
                if (status === 200) {
                    let chargeInfo = new ChargeInfo(response.id, this.cart.cartPrice, "usd", "Eshop payment");
                    this.checkoutService.handleCharge(chargeInfo).subscribe(
                        data => {
                            if(data == true) {
                                this.gotoOrderConfirm();
                            }
                        },error => {
                            alert('Problem Charge');
                        }
                    );

                } else {
                    alert("Error getting token");
                }
            });
        });
    }

    gotoOrderConfirm() {
        this.order.reset();
        this.cart.reset();
        this.router.navigateByUrl("/order-confirmation");
    }
}