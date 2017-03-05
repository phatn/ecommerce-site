import {Component} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
import {Cart} from "../../cart/shared/cart.model";
import {CheckoutService} from "../shared/checkout.service";
import {OrderLine} from "../shared/order-line.model";
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
                    alert("Place order successfully");
                }
            },error => {
                alert('Problem place order');
            }
        );
    }
}